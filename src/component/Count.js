import React from 'react'
import './style.css'

class Count extends React.Component {

state = {
    i : 0,
    check : true
}

butStart = () => {
    this.setState({
       check : !this.state.check
    });
    this.funstart() ;
}

funstart = () =>{
    console.log(this.state.check)
    this.state.check ?
    this.interval = setInterval(
    ()=>{
        this.setState({i:this.state.i+1});
    } , 1000) 
    : clearInterval(this.interval)
}


funreset= () => {
    this.setState({i:0});
}

// startTimer = () =>{
//     this.interval = setInterval(this.tick,1000);
// this.setState({ paused : false });
// }

// stopTimer = () => {
//   clearInterval( this.interval );
// this.setState({ paused : true });
// }

// this.myInterval = setInterval(()=>{
//     this.setState({ time: this.state.time + 1 });
//   }, 1000);

    render (){
        return (
            <div className="content">
                <h1> {this.state.i} </h1>
                <div className="content_button">
                    {
                        this.state.check ?
                        <button type="button" className="btn btn-secondary" onClick={this.butStart} >Start</button>
                        :
                        <button type="button" className="btn btn-secondary" onClick={this.butStart} >Stop</button>
                    }
                
                
                <button type="button" className="btn btn-secondary" onClick={this.funreset}>Reset</button>

                </div>

            </div>
        )
    }
    
}

export default Count;
