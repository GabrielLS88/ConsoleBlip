import React, { useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: "https://telek.http.msging.net/commands",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Key dGVsZWtyb3V0ZXI6alBxTDBocjNOc3kwZVdwYVFINVU='
  }
});

const VariaveisNumber = ({ setUser }) => {
  useEffect(() => {
    const fetchUser = () => {
      api.post('', {
        id: "{{$guid}}",
        to: "postmaster@builder.msging.net",
        method: "get",
        uri: "/contexts/5534997801829@wa.gw.msging.net?withContextValues=true"
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
      });
    };

    fetchUser();
    const intervalId = setInterval(fetchUser, 20000);

    return () => clearInterval(intervalId);
  }, [setUser]);

  return null;
};

export default VariaveisNumber;
