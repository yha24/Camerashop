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
      alert('Đồ uống của bạn đây' + this.state.type+'\n số tiền dư:' +money - this.state.price) + 'đ'
    }
    else{
      alert('Không đủ tiền')
    }
  }
  SubmitForm
  render() {
    return (
      <div>Menu</div>
    )
  }
}
