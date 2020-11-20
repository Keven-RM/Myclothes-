import React, {useState} from 'react';
import api from '../../services/api';
import './styles.css'

export default function Cadastro(){
  const [nome, setNome]       = useState('');
  const [email, setEmail]       = useState('');
  const [senha, setSenha]       = useState('');
  const [CPF, setCPF]           = useState('');
  const [cartao, setCartao]     = useState('');
  const [endereco] = useState(Array);
  const [cidade, setCidade]     = useState('');
  const [rua, setRua]           = useState('');
  const [numero, setNumero]     = useState('');
  const [mensagem, setMensagem] = useState('');
  
  async function handleClick(event) {
    event.preventDefault(); //EVITA QUE A PAGINA RECARREGE
    await api.post(`/user/inserir`, {nome, email, senha, CPF, cartao, endereco:{cidade, rua , numero}})
    .then(setMensagem('Aguarde'), window.location.href = "http://localhost:3000/login")
  }

    return (
      <div>
          <form onSubmit={handleClick} className="form-login">
              <h2>Cadastro</h2>
              <label to="nome">Nome</label>
              <input type="text" name="nome" onChange={event => setNome(event.target.value)} />
              <label to="email">Email</label>
              <input type="text" name="email" onChange={event => setEmail(event.target.value)} />
              <label to="senha">Senha</label>
              <input type="password" name="senha" onChange={event => setSenha(event.target.value)} />
              <label to="CPF">CPF</label>
              <input type="text" name="CPF" onChange={event => setCPF(event.target.value)} />
              <label to="cartao">Cartao</label>
              <input type="text" name="cartao" onChange={event => setCartao(event.target.value)} />
              <label>Endereco</label>
              <input type="text" name="cidade" placeholder="Cidade" onChange={event => setCidade(event.target.value)} />
              <input type="text" name="rua" placeholder="Rua" onChange={event => setRua(event.target.value)} />
              <input type="text" name="numero" placeholder="Numero" onChange={event => setNumero(event.target.value)} />
            <button type="submit">Cadastrar</button>
            <p><i>{mensagem}</i></p>
          </form>
        </div>
        )
}