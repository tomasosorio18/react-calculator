import './App.css';
import logo from './images/logo.ico'
import Boton from './components/Boton'
import Pantalla from './components/Pantalla'
import BotonClear from './components/BotonClear'
import { useState } from 'react';
import { evaluate } from 'mathjs'
function App() {

  const [input, setInput]= useState('');

  const agregarInput = val => { 
    setInput(input + val);
  };
  const clearInput = val => { 
    setInput('');
  };


  const muestrainput = () => {  
      return(input);
  };

  const calcularResultado = () =>{
    if(input){
      setInput(evaluate(input));
    }else{
      alert("seleccione numeros");
    }
  
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        src={logo}
        className='logo'
        alt='Logo' />


      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={muestrainput} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClic={clearInput}>Clear</BotonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
