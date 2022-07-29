import './App.css';
import { Boton } from './componentes/boton';
import Pantalla  from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear';
import {useState} from 'react';


function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  return (
    <div className="App">
        <div className='contenedor-calculadora'>
          
          <Pantalla /*El primer input es el prop de pantalla, el segundo es el state*/ 
          input={input}/>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>x</Boton>
          </div>
          <div className='fila'>
            <Boton>=</Boton>
            <Boton>0</Boton>
            <Boton>.</Boton>
            <Boton>/</Boton>
          </div>
          <div className='fila'>
             <BotonClear>Clear</BotonClear>
          </div>
        </div>
        
    </div>
  );
}

export default App;
