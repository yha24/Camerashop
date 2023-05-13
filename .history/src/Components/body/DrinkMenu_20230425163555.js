import React, { Component } from 'react'

 class DrinkMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      type:'',
      price:'',
      money:''
    }
  }
  checkOrder=(money)=>{
    if (money >= this.state.price){
      alert('Đồ uống ')
    }
  }
  render() {
    return (
      <div>Menu</div>
    )
  }
}
