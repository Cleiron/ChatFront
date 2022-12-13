//import React, { useState } from "react";
import React from "react";
import axios from "axios";

export class EntradaSalida extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mensaje: "", feedback: "-"};
    this.recibirFeedback = this.recibirFeedback.bind(this);
  }
  recibirFeedback () {
    this.setState({feedback: "..."});
    let respuesta = "";
    
    /*
    var self = this;
    axios
      .post("http://localhost:8000/enviar/",{ "texto": this.state.mensaje })
      //.get("http://localhost:8000/")
      .then(function (response) {
        respuesta = JSON.stringify(response.data);
        console.log(respuesta);
        self.setState({feedback: respuesta});
      })
      .catch(function (error) {
        respuesta = "Error al recibir el mensaje";
        self.setState({feedback: respuesta});
        console.log(error);
      });*/

      axios
      .post("http://localhost:8000/enviar/",{ "texto": this.state.mensaje })
      .then((response) => {
        respuesta = JSON.stringify(response.data);
        console.log(respuesta);
        this.setState({feedback: respuesta});
      })
      .catch((error) => {
        respuesta = "Error al recibir el mensaje";
        console.log(error);
        this.setState({feedback: respuesta});
      });

  }
  contenidoMensaje (msj) {
    this.setState({mensaje: msj})
  }

  render () {
    return (
      <div>
      <h2>Ingrese el texto:</h2>
      <textarea
        id="texto"
        rows="6"
        cols="50"
        onChange={(e) => this.contenidoMensaje(e.target.value)}
      ></textarea>
      <br />
      <button onClick={this.recibirFeedback}>Enviar</button>
      <h2>Respuesta</h2>
      <div id="rta">
        <p>{this.state.feedback}</p>
      </div>
      </div>
    );
  }
}

export const TextosPrueba = () => {
  const problemas = ['Un coche inicia un viaje de 495 Km. a las ocho y media de la mañana con una velocidad media de 90 Km/h','Un caracol recorre en línea recta una distancia de 10,8 m en 1,5 h. ¿Qué distancia recorrerá en 5 min?',
'Calcula la energía potencial que posee un libro de 500 gramos de masa que está colocado sobre una mesa de 80 centímetros de altura.','Un correa de cuero esta enrollada en una polea a 20 cm de diámetro. Se aplica a la correa una fuerza de 60 N. ¿Cuál es el momento de torsión en el centro del eje?','Desde un edificio se deja caer una pelota, que tarda 8 segundos en llegar al piso. ¿con que velocidad impacta la pelota contra el piso?'];
  const items = problemas.map(texto => {return(<li>{texto}</li>)})
  
return (
    <div>
      <h2>Textos de prueba</h2>
      <ul>
        {items}
      </ul>
    </div>
  );
};