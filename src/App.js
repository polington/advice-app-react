import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
    state = { advice : ''};
    //React Life cycle methods 
    // Render(), ComponentDidMount(), ComponentDidUpdate(), ComponentWillUnmount()
    componentDidMount(){
        this.fetchAdvice();
            console.log('COMPONENT DID MOUNT!');
    }

    //https://api.adviceslip.com/
    fetchAdvice = () =>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const { advice } = response.data.slip;
            //this.setState({ advice : advice});
            this.setState({ advice});// short cut if value & property are same. 
            console.log(advice);
        })
        .catch((error)=>{
            console.log(error);
        });
    }
  
    render() {
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={this.fetchAdvice}>
                    <span></span> GIVE ME ADVICE!
                </button>
                </div>
                
            </div>
        );
    }
}

export default App;