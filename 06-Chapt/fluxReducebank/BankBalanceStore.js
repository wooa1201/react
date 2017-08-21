import AppDispatcher from './AppDispatcher';
import {ReduceStore } from 'flux/utils' ;
import bnakConstants from './constants' ;

class BankBalanceStore extends ReduceStore {

   getInitialState(){
     return 0 ;
   }
   reduce(state, action){
     switch (action.type) {
       case bnakConstants.CREATED_ACCOUNT:
           return 0 ;

      case bnakConstants.DEPOSITED_INTO_ACCOUNT:
              return   state + action.amount  ;

      case bnakConstants.WIDTHDREW_FROM_ACCOUNT:
            return state -  Number(action.amount ) ;

      default :
          return state ;
     }
   }
}
export default new BankBalanceStore(AppDispatcher) ;
