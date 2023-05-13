import React, { Component } from 'react';

class DrinkMenu extends Component {
    constructor(props) {
        super(props);
        this.state={
            type: '',
            price:'',
            money:''
        }
    }
    checkOrder=(money)=>{
        if(money >= this.state.price){
            alert("Đồ uống của bạn đây: " + this.state.type + ', Số tiền dư của bạn là: '+(money-this.state.price)+"đ")
        }
        else{
            alert("Bạn không đủ tiền. Xin mời ghé lần sau")
        }
    }
    submitForm=(event)=>{
        event.preventDefault();
        if(this.state.price==''){
            alert("Vui lòng chọn đồ uống");
        }
        else{
            if(this.state.money==''){
                alert("Vui lòng nhập số tiền của bạn")
            }
            else{
                this.checkOrder(this.state.money)
            }
        }
    }
    setHandel=(event)=>{
        let name= event.target.name;
        let value=event.target.value;
        if(name =='money'){
            if(!Number(value)){
                alert("Nhập số vào bạn ơi")
            }
        }
        if(name =='type'){
            if(value=="caffe sữa"){
                this.setState({price: 20000})
            }
            else if(value=="caffe đá"){
                this.setState({price: 10000})
            }
            else if(value=="Sting dâu"){
                this.setState({price: 12000})
            }
            else{
                this.setState({price: 30000})
            }
        }
        this.setState({[name]: value})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Mời bạn chọn thức uống: </td>
                                <td>
                                    <select name="type" onChange={this.setHandel}>
                                        <option selected hidden>Mời chọn</option>
                                        <option value="Caffee sữa">Caffee sữa</option>                                        
                                        <option value="Caffee đá">Caffee đá</option>                                        
                                        <option value="Sting dâu">Sting dâu</option>                                        
                                        <option value="Trà đào">Trà đào</option>                                        
                                    </select>
                                </td>
                                <td><label> Price---{this.state.price}</label></td>
                            </tr>
                            <tr>
                                <td>Mời nhập tiền của bạn: </td>
                                <td>
                                    <input name='money' type='number' onChange={this.setHandel}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type='submit' value='Thanh toán'></input>
                </form>
            </div>
        );
    }
}

export default DrinkMenu;