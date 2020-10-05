import React from 'react';
import './styles.css';

import {BsArrowLeft} from 'react-icons/bs'
const Mensagem = () =>{
    return(
    <>
        <div className="voltar">
            <h1>Mensagens</h1>
            <a href="#">
                <BsArrowLeft />
                Voltar
                </a>
        </div>
        <aside className="mensagens">
        <details>
            <summary>
                <span>Sua compra chegou</span>
                <p className="status">Visualizada</p>
                <div class="summary-chevron-up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </summary>

            <div class="summary-content">
                <p>Sua compra foi entregue no endereço, Rua manoel Fernades 123</p>
                </div>
            <div class="summary-chevron-down">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up">
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
                
        </div>
        </details>

        <details>
            <summary>
                <span id="i">Problemas na entrega</span>
                <p className="status"></p>
                <div class="summary-chevron-up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </summary>

            <div class="summary-content">
                <p>Houve um problema em achar o seu endereço</p>
                </div>
            <div class="summary-chevron-down">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up">
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
                
        </div>
        </details>
        </aside>
</>
)
}

export default Mensagem