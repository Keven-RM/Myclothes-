import React from 'react';
import './styles.css';

import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Mensagem = () =>{
    return(
    <>
        <div className="voltar">
            <h1>Mensagens</h1>
            <Link to="/user">
                <BsArrowLeft />
                Voltar
            </Link>
        </div>
        <aside className="mensagens">
            <h1>Não ha mensagens aqui</h1>
        </aside>
</>
)
}

export default Mensagem