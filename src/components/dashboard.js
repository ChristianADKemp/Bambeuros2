import React, { Component, useState } from 'react';

const Account = (props) => {
    return (
      <div className="text-info font-weight-bold">Account Balance: <p>{props.counter}</p></div>
    )
  }

const User = () => {
    const [ counter, setCounter ] = useState(100)

    const sendBambeuro = () => setCounter(counter -5);
    console.log(counter);

  
    return (
      <div>
        <Account counter={counter}/>
        <button onClick={sendBambeuro} className="btn btn-primary btn-block">
          Send Bambeuroes
        </button>
        
      </div>
    )
  }


export default class Dashboard extends Component {
    render() {
        return (
            <div className="flex-column wallet">
            <h3 className="text-success font-weight-bold">Bambeuro Dashboard</h3>
            <User />
            </div>
                
              
        );
    }
}