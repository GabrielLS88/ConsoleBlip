import React, { useState } from 'react';
import './Home.css';
import ApiBlocos from '../Componetes/ConsoleNumber/ComponenteConsole';
import VariaveisNumber from '../Componetes/ColetarVariaveis/Variaveis';
import Api from '../Service/BlocoNumber';

function Home() {
  let dadosApi = ''
  const consultarBlocos = (dadosApi) => {
    const inputVal = document.getElementById('inputNumber').value;
    console.log(`Consultando número: ${inputVal}`);
    Api(inputVal) 
  };

  
  return (
    <div className="bodyHome">
      <div className="header">
        <input id='inputNumber' className="numberValor" placeholder='Digite seu número' type="text" />
        <button onClick={consultarBlocos}>Consultar</button>
        <button >Apresentar Variaveis</button>
        <button >Zerar Contexto</button>
      </div>
      <div className="corpoBody">
        <div className="lado1">
          {/* <ApiBlocos/> */}
        </div>
        <div className="lado2">
          {/* <VariaveisNumber /> */}
        </div>
      </div>
      
    </div>
  );
}

export default Home;
