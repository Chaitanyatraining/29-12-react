import React, { Component } from 'react'

class ContactUs extends Component {

    state = {
        firstName:'',
        lastName:'',
        email: '',
        phone: '',
        firstNameErr:'',
        lastNameErr:'',
        emailErr:'',
        phoneErr:''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.handleValidation()
    }

    handleValidation = () => {
        let firstNameErr = '';
        let lastNameErr = '';
        let emailErr = '';
        let phoneErr = '';

        if(this.state.firstName.length<=4) {
            firstNameErr = "first Name should atleast 4 chars"
        }

        if(this.state.lastName.length<1){
            lastNameErr = 'last name is required'
        }
        
        if(!this.state.email.includes('@')){
            emailErr = 'Enter a valid email'
        }

        if(this.state.phone.length != 10){
            phoneErr = 'enter a valid number'
        }
//falsy - '', false, null, NaN, undefined, 0
        if(firstNameErr || lastNameErr || emailErr || phoneErr){
            this.setState({firstNameErr, lastNameErr, emailErr, phoneErr })
        } else {
            this.setState({firstNameErr, lastNameErr, emailErr, phoneErr })
        }

    }

    handleChange = (e) => {
        // console.log(e.target)
        const {name, value} = e.target
        this.setState({[name] : value})
        console.log(this.state)
    }
    // validation
    // firstName > 4
    // lastName > 1
    // email '@'
    // phone 10 digits

    render() {
        return (
            <>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <h2>ContactUs</h2>
                    <form>
                        <div>
                            <input 
                            type="text" 
                            placeholder='Enter your name'
                            name='firstName' 
                            className='form-control'
                            onChange={this.handleChange}
                            value={this.state.firstName}
                            />
                            <p className='text-danger'>{this.state.firstNameErr}</p>
                        </div>
                        <div className='mt-1'>
                            <input 
                            type="text" 
                            placeholder='Enter your lastName'
                            name='lastName' 
                            className='form-control'
                            onChange={this.handleChange}
                            value={this.state.lastName}
                            />
                            <p className='text-danger'>{this.state.lastNameErr}</p>
                        </div>
                        <div className='mt-1'>
                            <input 
                            type="email" 
                            placeholder='Enter your email'
                            name='email' 
                            className='form-control'
                            onChange={this.handleChange}
                            value={this.state.email}
                            />
                            <p className='text-danger'>{this.state.emailErr}</p>
                        </div>
                        <div className='mt-1'>
                            <input 
                            type="number" 
                            placeholder='Enter your phone'
                            name='phone' 
                            className='form-control'
                            onChange={this.handleChange}
                            value={this.state.phone}
                            />
                            <p className='text-danger'>{this.state.phoneErr}</p>
                        </div>
                        <button className='btn btn-primary mt-2'
                        onClick={(e) => this.handleSubmit(e)}
                        >
                            submit
                        </button>
                    </form>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </>
        )
    }
}

export default ContactUs