import React from 'react';
import './styles.css';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';

const User = () =>{
    return(
        <>
        <container>
            <h2  className="user-title" >Meus Dados</h2>
        <section>
            <h1>Conta</h1>
            <div>
                <span>Nome</span>
                <p>Keven Rodrigues Meirelles</p>
                <IoIosArrowForward className="icons" />
            </div>
            <div>
                <span>Email</span>
                <p>nome@gmail.com</p>
                <IoIosArrowForward className="icons" />
            </div>
            <div>
                <span>Senha</span>
                <p>***********</p>
                <IoIosArrowForward className="icons" />
            </div>
            <div>
                <span>RG</span>
                <p>234567890-99</p>
                <IoIosArrowForward className="icons" />
            </div>
        </section>

        <section>   
            <h1>Mensagens</h1>         
            <div>
                <span>Mensagens</span>
                <p>2 novas mensagens</p>
                <IoIosArrowForward className="icons" />
            </div>
        </section>

        <section>
        <h1>Cartão</h1>         
            <div>
                <span>Cartão</span>
                <p>2345.6789.0456.7842</p>
                <IoIosArrowForward className="icons" />
            </div>
            <div>
                <span>Adicionar</span>   
                <AiOutlinePlus className="icons" /> 
            </div> 
        </section>
        
        <section>
        <h1>Entrega</h1>         
            <div>
                <span>Entrega</span>
                <IoIosArrowForward className="icons" />
            </div>
        </section>

        <section>
        <h1>Compras</h1>         
            <div>
                <span>Produtos</span>
                <IoIosArrowForward className="icons" />
            </div>
        </section>
        </container>
        </>
    )
}

export default User;