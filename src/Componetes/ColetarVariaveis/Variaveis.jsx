import React, { useState } from 'react';
import './Variaveis.css';
import VariaveisNumber from '../../Service/VariaveisNumber';

function Variavel() {
  const [variaveis, setVariaveis] = useState([]);

  function ColetarVariaveis(userState) {
    let dado = [];
    let tamanhoApi = userState?.resource?.items?.length || 0;
    for (let i = 0; i < tamanhoApi; i++) {
      if (userState.resource.items[i].name && userState.resource.items[i].value) {
        dado.push({
          "NomeVariavel": userState.resource.items[i].name,
          "ValorVariavel": userState.resource.items[i].value
        });
      }
    }
    return dado;
  }

 
  return (
    <div className="bodyVariaveis">
      <div className="corpoBodyVariaveis">
        <div className="consoleVariaveis">
          <div className="blocoTituloVariaveis">
            <h1>Variáveis</h1>
          </div>
          <div className="divBlocosDasVariaveis">
            <div className="tituloFixoInicioVariaveis">Variável e seus valores</div>
            {variaveis.map((item, index) => (
              <div className='blocosDosValoresDasVariaveis' key={index}>
                <p>Nome: {item.NomeVariavel}</p>
                <div className="divSegurarValorBloco">
                 <p>Valor: {item.ValorVariavel}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>

      <VariaveisNumber setUser={(userState) => setVariaveis(ColetarVariaveis(userState))} />
    </div>

  );
}

export default Variavel;
