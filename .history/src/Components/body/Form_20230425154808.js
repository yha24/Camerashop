import React, { Component } from 'react';

class From extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hk1: 0,
            hk2: 0,
            avg: 0,
            result: "",
            xl: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange = (event) => {
        let key = event.target.name;
        let val = event.target.value;

        this.setState({ [key]: val });
        this.setState((state) => ({
            avg: parseFloat((parseFloat(state.hk1) + parseFloat(state.hk2)) / 2),
        }));
        this.setResult();
        this.setXL();

    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert("Ban la hoc sinh : " + this.state.xl);

    };
    setResult = () => {
        if (this.state.avg > 4, 5) this.setState({ result: "Được lên lớp" });
        else this.setState({ result: "Ở lại lớp" });
    };
    setXL = () => {
        if (this.state.avg<4.5) this.setState({xl:"Yếu"});
        else if (this.state.avg<6.5)this.setState({xl:"Trung Bình"});
        else if (this.state.avg<8)this.setState({xl:"Khá"});
        else if (this.state.avg<9)this.setState({xl:"Giỏi"});
        else if (this.state.avg<10)this.setState({xl:"Xuất sắc"});
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Kết quả học tập </h3>
                <form onSubmit={this.handleSubmit} className='was-validated'>
                    <div className='from-group'>
                        <label htmlFor='hk1'>Điểm HK1:</label>
                        <input
                            type='number'
                            className='form-control'
                            id='hk1'
                            name='hk1'
                            max={10}
                            min={0}
                            defaultValue={0}
                            required
                            onChange={this.handleChange}
                        />
                    {/* <div className="invalid-feedback"> Điểm không hợp lệ</div> */}
                    </div>
                    <div className='from-group'>
                        <label htmlFor='hk2'>Điểm HK2:</label>
                        <input
                            type='number'
                            className='form-control'
                            id='hk2'
                            name='hk2'
                            max={10}
                            min={0}
                            defaultValue={0}
                            required
                            onChange={this.handleChange}
                        />
                        {/* <div className="invalid-feedback"> Điểm không hợp lệ</div> */}
                    </div>
                    <div className='from-group'>
                        <label htmlFor='hk2'>Điểm Trung Bình</label>
                        <input
                            type='number'
                            className='form-control'
                            readOnly
                            value={this.state.avg}
                            onChange={this.handleChange}
                        />

                    </div>
                    <div className='from-group'>
                        <label htmlFor='hk2'>Kết quả:</label>
                        <input
                            type='text'
                            className='form-control'
                            defaultValue={0}
                            readOnly
                            value={this.state.result}
                        />
                    </div>
                    <div className='from-group'>
                        <label htmlFor='hk2'>Xếp loại:</label>
                        <input
                            type='text'
                            className='form-control'
                            defaultValue={0}
                            readOnly
                            value={this.state.xl}
                        />
                    </div>
                    <br></br>
                    <button type="submit" value="submit" className='btn btn-primary'>
                        XEM KẾT QUẢ
                    </button>
                </form>
            </div>

        );
    }
}

export default From;