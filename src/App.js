import "./styles.css";
import {EntradaSalida, TextosPrueba} from "./Entrada";

const App = () => {
  return (
    <div className="App">
      <h1>Comunicación con el modelo</h1>
      <EntradaSalida />
      <TextosPrueba />
    </div>
  );
};

export default App;
