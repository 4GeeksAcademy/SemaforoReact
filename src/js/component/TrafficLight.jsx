import React, { Component } from 'react';
import '/workspaces/SemaforoReact/src/styles/TrafficLight.css';

class TrafficLight extends Component {
  constructor(){
    super();
      this.state = {
        estadoRoja: "apagada",
        estadoAmarilla: "apagada",
        estadoVerde: "apagada"
      };
  }

    render(){
      return(
        <div>
          <div id="barra"></div>
          <div id="semaforo">
            <div className= "luz roja" id= {this.state.estadoRoja} 
            onClick={()=>this.setState({estadoRoja: "encendida", estadoAmarilla: "apagada", estadoVerde: "apagada"})}>
            </div>
            <div className= "luz amarilla" id= {this.state.estadoAmarilla} 
            onClick={()=>this.setState({estadoRoja: "apagada", estadoAmarilla: "encendida", estadoVerde: "apagada"})}>
            </div>
            <div className= "luz verde" id= {this.state.estadoVerde} 
            onClick={()=>this.setState({estadoRoja: "apagada", estadoAmarilla: "apagada", estadoVerde: "encendida"})}>
            </div>
          </div>
        </div>);
    }
}

export default TrafficLight;
