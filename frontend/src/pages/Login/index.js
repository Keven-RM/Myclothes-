import React, {useState, useEffect} from 'react';
import api from '../../services/api';

export default function Login(){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [aguarde, setAguarde] = useState('');
  
  function handleClick(event) {
    event.preventDefault();
    
    setAguarde('Aguarde...')
  
    api.post(`/user/autenticar`, {email, senha})
      .then(res => {
          if(res.data === false){
            console.log(res.data);
            window.location.href = "http://localhost:3000/login";
          }
      })
    }

    return (
      <div>
          <form onSubmit={handleClick}>
            <label>
              Person Name:
              <br />
              <input type="text" name="email" onChange={event => setEmail(event.target.value)} />
              <input type="text" name="senha" onChange={event => setSenha(event.target.value)} />
            </label>
            <button type="submit">Add</button>
          </form>
            <p>{aguarde}</p>
        </div>

        )
}