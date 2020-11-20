import React, { useState } from 'react'
import api from '../../services/api'

export default function CPF(){
    const [CPF, setCPF] = useState('')
    
    async function alterar(event){
        event.preventDefault(); 
        await api.post(`/user/cpf/alterar/${sessionStorage.getItem('user-email')}/${CPF}`)
    }

    return( 
        <div>
        <form onSubmit={alterar} className="form-login">
            <h2>Alterar seu CPF</h2>
            <label for="cpf">Digite seu nova cpf</label>
            <input type="text" name="cpf" onChange={event => setCPF(event.target.value)} />
          <button type="submit">Comfirmar</button>
        </form>
      </div>
    )
}