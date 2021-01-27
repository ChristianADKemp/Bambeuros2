import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

function HomeScreen()  { 
    
    const history = useHistory();
   
    function handleClick(e) {
        e.preventDefault();
        console.log('button clicked');
        history.push("/dashboard");
      }
  	return (
      	<button onClick={handleClick} type="submit" className="btn btn-primary btn-block">Login</button>
    )
}

export default class Login extends Component {
    render() {
        return (
            <form className="flex-column">
                <h3 className="text-success font-weight-bold">Welcome Bambinos</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" />
                </div>

              

             <HomeScreen />
             
            </form>
        );
    }
}