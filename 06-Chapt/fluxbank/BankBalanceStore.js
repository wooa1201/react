import {EventEmitter} from 'fbemitter' ;
import AppDispatcher from './AppDispatcher';
import bnakConstants from './constants' ;

const CHANG_EVENT = 'change' ;
let _emitter = new EventEmitter();
let balance = 0 ;

let BankBalanceStore ={
    getStore(){
       return balance ;
    }  ,
    addListener(callback) {
        return _emitter.addListener(CHANG_EVENT, callback)   ;
    }
};

BankBalanceStore.dispatchToken = AppDispatcher.register((action) =>{
     switch (action.type) {
       case bnakConstants.CREATED_ACCOUNT:
            balance = 0 ;
            _emitter.emit(CHANG_EVENT)  ;
         break;
      case bnakConstants.DEPOSITED_INTO_ACCOUNT:
              balance = balance+ action.amount  ;
              console.log("[balance]"+balance);
              _emitter.emit(CHANG_EVENT)  ;
           break;
      case bnakConstants.WIDTHDREW_FROM_ACCOUNT:
                   balance = Number(balance) -  Number(action.amount ) ;
                   console.log("[WIDTHDREW_FROM_ACCOUNT]"+balance);
                   _emitter.emit(CHANG_EVENT)  ;
          break;
     }
}) ;

export default BankBalanceStore ;
