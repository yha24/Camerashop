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
      let value=event.target.value;
      if(name=='nomey'){ 
        if(!Number(value)){
          alert('Nhập số vào bạn ơi')
        }
      }
      if(name=='type'){
        if(value=='Caffee sữa'){
          this.setState({price:12000})
        }
        else if(value=='Caffee đá'){
          this.setState({price:10000})
        }
        else if(value='Sting dâu'){
          this.setState({price:8000})
        }
        else{
          this.setState({price:2000})
        }
      }
      this.setState({[name]:value});

  render() {
    return (
      <div>
        <form onSubmit = {this.submitForm}> 
          <table>
              <tbody>
                <tr>
                  <td> Mời chọn thức uống:</td>
                  <td>
                    <select name='type' onChange={this.setHandel}>
                        <option selected hidden>Mời chọn</option>
                        <option value='Caffee sữa'>Caffee sữa</option>
                        <option value='Sting dâu'>Sting dâu</option>
                        <option value='Trà đá'></option>
                    </select>
                  </td>
                </tr>
              </tbody>
          </table>
        </form>
      </div>
    )
  }
}