import React, { useState } from 'react'
import api from '../../services/api'

export default function Senha(){
    const [senha, setSenha] = useState('')
    
    async function alterar(event){
        event.preventDefault(); 
        await api.post(`/user/senha/alterar/${sessionStorage.getItem('user-email')}/${senha}`)
    }

    return(
        <div>
        <form onSubmit={alterar} className="form-login">
            <h2>Alterar sua senha</h2>
            <label for="senha">Digite sua nova senha</label>
            <input type="password" name="senha" onChange={event => setSenha(event.target.value)} />
          <button type="submit">Comfirmar</button>
        </form>
      </div>
    )
}