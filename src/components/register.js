import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom';

function RegisterForm() {
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    
    const [lastName, setLastName] = useState('');
    
    const [password, setPassword] = useState('');
   
    const [email, setEmail] = useState();
    
    
    function handleClick(e) {
        e.preventDefault();
        history.push('/sign-in');
      }
  return (
    <button onClick={handleClick} type="submit" className="btn btn-primary btn-block">Register</button>
  )
}

export default class Register extends Component {
    userData;

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }
    onChangeFirstName(e) {
        this.setState({ firstName: e.target.value })
    }

    onChangeLastName(e) {
        this.setState({ lastName: e.target.value})
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                firstName: this.userData.firstName,
                lastName: this.userData.lastName,
                email: this.userData.email,
                password: this.userData.password
            })
        } else {
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    
    render() {
        return (
            <div>
               <form className="flex-column" onSubmit={this.onSubmit}>
                    <h3 className="text-success font-weight-bold">Sign Up</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control"  value={this.state.firstName} onChange={this.onChangeFirstName}/>
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" value={this.state.lastName} onChange={this.onChangeLastName}/>
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control"  value={this.state.email} onChange={this.onChangeEmail} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
                    </div>
            <RegisterForm /> 
        </form>      
    </div>
        );
    }
}
