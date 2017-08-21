import AppDispatcher from './AppDispatcher' ;
import bankConstants from './constants' ;


let BankActions = {
   createAccount(){
     AppDispatcher.dispatch({
        type : bankConstants.CREATED_ACCOUNT,
        amount:0
     })
   },

   depositIntoAccount(amount){
     AppDispatcher.dispatch({
     type : bankConstants.DEPOSITED_INTO_ACCOUNT,
     amount: Number(amount)
    })
   } ,

   widthdrawAccount(amount){
     AppDispatcher.dispatch({
     type : bankConstants.WIDTHDREW_FROM_ACCOUNT,
     amount:Number(amount)
    })
   }
};
export default BankActions ;
