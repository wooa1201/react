import React, { Component }  from 'react' ;
import {render} from 'react-dom';
import BankBalanceStore from './BankBalanceStore' ;
import BankActions from './BankActions' ;


class App extends Component{
  constructor(){
         super(...arguments);
         BankActions.createAccount()  ;

         this.state ={
           balance : BankBalanceStore.getStore()
         }
  }
  componentDidMount(){
    this.storeSubScription = BankBalanceStore.addListener(data => this.handleStoreChange(data))  ;
  }

  componentWillUnmount(){
    this.storeSubScription.remove() ;
  }

  handleStoreChange(){
    this.setState({balance:BankBalanceStore.getStore()}) ;
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

render(<App />, document.getElementById('root'))   ;
