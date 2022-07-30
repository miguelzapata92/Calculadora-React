import './App.css';
import { Boton } from './componentes/boton';
import Pantalla  from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {

    setInput(input + val);
  };

  const limpiarInput = () => {
    setInput('')
  };



  const calcularResultado = () => {

    if(input) {
      setInput(evaluate(input))
    } else {
      setInput('')
    };
    
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
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
             <BotonClear manejarClear={limpiarInput}>Clear</BotonClear>
          </div>
        </div>
        
    </div>
  );
}

export default App;
