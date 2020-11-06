import React, {useState} from 'react';
import api from '../../services/api';
import './styles.css'

export default function Login(){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [aguarde, setAguarde] = useState('');
  
  function handleClick(event) {
    event.preventDefault(); //EVITA QUE A PAGINA RECARREGE
    
    setAguarde('Aguarde...') //MENSAGEM DE ESPERA
  
    //FAZ A AUTENTICAÇÃO DO USUARIO
    api.post(`/user/autenticar`, {email, senha})
      .then(res => {
          if(res.data === true){
            console.log(res.data);
            window.location.href = "http://localhost:3000/user";

            //ENVIANDO OS DADOS DO LOGIN PARA A SESSÃO DO SITE
            sessionStorage.setItem("user-email", email);
          }
        })
    }

    return (
      <div>
          <form onSubmit={handleClick} className="form-login">
              <h2>Login</h2>
              <label for="email">Email</label>
              <input type="text" name="email" onChange={event => setEmail(event.target.value)} />
              <label for="senha">Senha</label>
              <input type="password" name="senha" onChange={event => setSenha(event.target.value)} />
            <button type="submit">Entrar</button>
            <p><i>{aguarde}</i></p>
          </form>
        </div>
        )
}