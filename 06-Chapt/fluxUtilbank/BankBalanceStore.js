import AppDispatcher from './AppDispatcher';
import {Store} from 'flux/utils' ;
import bnakConstants from './constants' ;

let balance = 0 ;

class BankBalanceStore extends Store {
   getState(){
       return balance ;
   }

   __onDispatch(action){
     switch (action.type) {
       case bnakConstants.CREATED_ACCOUNT:
            balance = 0 ;
            this.__emitChange() ;
         break;
      case bnakConstants.DEPOSITED_INTO_ACCOUNT:
              balance = balance+ action.amount  ;
                this.__emitChange() ;
           break;
      case bnakConstants.WIDTHDREW_FROM_ACCOUNT:
                   balance = Number(balance) -  Number(action.amount ) ;
                     this.__emitChange() ;
          break;
     }
   }
}

export default new BankBalanceStore(AppDispatcher) ;
