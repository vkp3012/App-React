import React, { Component } from 'react'

export default class temperature extends Component {
    constructor(props){
        super(props);
        this.state ={
            temperature:10,
            temperatureColor :"cold"
        }
    }

    incerment = () =>{
        if(this.state.temperature === 30) return;

        this.setState({temperature: this.state.temperature + 1});
        // console.log(newtemperature);
        
        let tempValue = this.state.temperature;
        console.log(tempValue);

        let setTemperatureColor = this.state.temperatureColor;
        console.log(setTemperatureColor);

        if(tempValue > 15){
            setTemperatureColor = "hot";
            console.log(setTemperatureColor);
        }

    }

    decerment = () =>{
        if(this.state.temperature === 0) return;

        // eslint-disable-next-line no-unused-vars
        const newtemperature = this.setState({temperature: this.state.temperature - 1});
    }
    
  render() {
    return (
      <div className='app-container'>

        <div className='temperature-display-container'>
            <div className={`temperature-display ${this.state.temperatureColor}`}>{this.state.temperature}°C</div>
        </div>

        <div className='button-container'>
            <button onClick={this.incerment}>+</button>
            <button onClick={this.decerment}>-</button>
        </div>

      </div>
    )
  }
}
