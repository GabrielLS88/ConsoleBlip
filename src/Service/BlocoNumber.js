import React, { useEffect } from 'react';
import axios from 'axios';

const CorpoApi = axios.create({
    baseURL: "https://telek.http.msging.net/commands",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Key dGVsZWtyb3V0ZXI6alBxTDBocjNOc3kwZVdwYVFINVU='
    }
});

const Api = ({numberValor}) => {
  const retornoAPI = ''
  useEffect(() => {
    const fetchUser = () => {
      CorpoApi.post('', {
        id: "{{$guid}}",
        method: "get",
        uri: '/threads/' + numberValor + '@wa.gw.msging.net?$take=100',
      })
      .then((response) => {
        retornoAPI(response.data);
      })
      .catch((err) => {
        console.log("Api esta dando errado")
      });
    };

    fetchUser();
    const intervalId = setInterval(fetchUser, 500);
    return () => clearInterval(intervalId);

  });


  function teste(retornoAPI) {
    if(retornoAPI != ''){
      let dado = [];
      let tamanhoApi = userState?.resource?.items?.length || 0;
      for (let i = 0; i < tamanhoApi; i++) {
        if (userState.resource.items[i].metadata && userState.resource.items[i].metadata['#stateName']) {
          dado.push({
            "ultimaBloco": userState.resource.items[i].metadata["#stateName"],
            "Data": userState.resource.items[i].date
          });
        }
      }
        return dado;
      }
    else{
      console.log("Retorno da api esta vazio")
    }
  }

  return teste(retornoAPI);
};

export default Api;
