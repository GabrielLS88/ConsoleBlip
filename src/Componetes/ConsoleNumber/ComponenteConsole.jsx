import { useEffect, useState } from 'react';
import './ComponenteConsole.css';

function Console(dadosApi) {
  return (
    <div className="bodyConsoleNumber">
      <div className="corpoBodyConsole">
        <div className="console">
          <div className="blocoTituloConsole">
            <h1>Console</h1>
          </div>
          <div className="divBlocosDoConsole">
            <div className="tituloFixoConsole">Bloco e Data</div>
            {teste(dadosApi).map((item, index) => (
              <div className='quadradrosDosValoresDoConsole' key={index}>
                <p>Bloco: {item.ultimaBloco}</p>
                <p>Data: {item.Data}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ApiBlocos setUser={setUser} />
    </div>
  );
}

export default Console;