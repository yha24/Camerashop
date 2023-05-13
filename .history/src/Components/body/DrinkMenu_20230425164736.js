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
      alert('Đồ uống của bạn đây' + this.state.type+'\n số tiền dư:' +(money - this.state.price) + 'đ')
    }
    else{
      alert('Không đủ tiền')
    }
  }
  SubmitForm=(event)=>{
    event.preventDefault();
    if(this.state.price==''){
      alert('Vui lòng chọn đồ uống');
    }
    else{
      if (this.state.money==''){
        alert('Vui lòng nhập số tiền của bạn')
      }
      else{
        this.checkOrder(this.state.money)
      }
    }
   }
   setHandle=(event)=>{
      let name=event.target.name;
      let value=event.tả
   }
  render() {
    return (
      <div>Menu</div>
    )
  }
}
