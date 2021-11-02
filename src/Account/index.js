import React, { Component } from 'react';


class Account extends Component {

    state = {
      balance: 0
    }
    inputRef = React.createRef()

    addClick = () => {
      this.setState({ 
        balance: parseInt(this.inputRef.current.value) + this.state.balance
      })
      this.inputRef.current.value= ''
    }

    subClick = () => {
      let currentBalance = this.state.balance;
      let inputValue = parseInt(this.inputRef.current.value);
      if (currentBalance < inputValue) return;
      let newBalance = currentBalance - inputValue;
      this.setState({balance: newBalance})
      this.inputRef.current.value = "";
    }

    render(){
      return (
      <div className="account">
        <h2>{this.props.title}</h2>

        <div className={"balance" + (this.state.balance === 0 ? " zero" : "")}>$ {this.state.balance}</div>
        
        <input ref={this.inputRef} type="text" placeholder="enter an amount" />
        <input onClick={this.addClick} type="button" value="Deposit" />
        <input onClick={this.subClick} type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
