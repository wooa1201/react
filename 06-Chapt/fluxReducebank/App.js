import React, { Component }  from 'react' ;
import {render} from 'react-dom';
import {Container} from 'flux/utils' ;
import BankBalanceStore from './BankBalanceStore' ;
import BankActions from './BankActions' ;

class App extends Component{
  constructor(){
         super(...arguments);
         BankActions.createAccount()  ;
  }

  deposit(){
     BankActions.depositIntoAccount(Number(this.refs.amount.value))  ;
     this.refs.amount.value = '' ;
  }

  withdraw(){
    BankActions.widthdrawAccount(Number(this.refs.amount.value))  ;
    this.refs.amount.value = '' ;
  }

  render(){
     return (
       <div>
          <header> FLUXTRUST BANK </header>

           <h1>Your balance is ${(this.state.balance)}</h1>
          <div className="atm">
              <input type="text" placeholder="Enter Ammount" ref="amount" />
             <br />
             <button onClick={this.withdraw.bind(this)}>Withdraw</button>
             <button onClick={this.deposit.bind(this)}>Deposit</button>
        </div>
       </div>
     )
}
}

App.getStores = () => ([BankBalanceStore]);
App.calculateState = (prevState) =>({balance:BankBalanceStore.getState()});

const AppContainer = Container.create(App) ;
render(<AppContainer />, document.getElementById('root'))   ;
