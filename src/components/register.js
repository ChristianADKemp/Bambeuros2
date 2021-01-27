import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom';

function RegisterForm() {
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    localStorage.setItem('','firstName');
    const [lastName, setLastName] = useState('');
    localStorage.setItem('','lastName');
    const [password, setPassword] = useState('');
    localStorage.setItem('','password');
    const [email, setEmail] = useState();
    localStorage.setItem('','email');
    
    function handleClick(e) {
        e.preventDefault();
        history.push('/sign-in');
        setFirstName({firstName});
        setLastName({lastName});
        setPassword({password});
        setEmail({email});
      }
  	return (
        <form className="flex-column">
            <h3 className="text-success font-weight-bold">Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" defaultValue={firstName} />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" defaultValue={lastName} />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" defaultValue={password} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" defaultValue={email} />
            </div>
            <button onClick={handleClick} type="submit" className="btn btn-primary btn-block">Register</button>
        </form>
    )
}

export default class Register extends Component {
    render() {
        return (
            <div>
                <RegisterForm />
                
               
            </div>
        );
    }
}