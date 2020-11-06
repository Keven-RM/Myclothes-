import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../services/api'

import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';

export default function User(){
    const [user, setUser] = useState('');

    const UserEmail = sessionStorage.getItem('user-email')
    
    //carregar informações do usuario 
    async function loadUser(){
        await api.get(`/user/${UserEmail}`)
            .then(res =>{
                setUser(res.data)
            }
        )
    }


    useEffect(() => {
        loadUser();
      }, []);
    
      console.log(user)
    return(
        <>
        <container>
            <h2  className="user-title" >Meus Dados</h2>
        <section>
            <h1>Conta</h1>
            <div>
                <span>Nome</span>
                <p>{user.nome}</p>
            </div>
            <div>
                <span>Email</span>
                <p>{user.email}</p>
            </div>
            <div>
                <span>Senha</span>
                <p>{user.senha}</p>
                <IoIosArrowForward className="icons" />
            </div>
            <div>
                <span>CPF</span>
                <p>{user.CPF}</p>
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
                <p>{user.cartao}</p>
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