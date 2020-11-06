import React, { useState, useEffect } from 'react';
import './styles.css'
import api from '../../services/api'

import {BsArrowLeft} from 'react-icons/bs'

export default function Produto(props){
    const [produto, setProduto] = useState('')
    
    const userEmail = sessionStorage.getItem('user-email');

    async function loadProduct(){
        const response = await api.get(`produto/${props.match.params.id}`)
        setProduto(response.data);
        console.log(response.data)

    };

    async function addCarrinho(){
        await api.post(`/user/carrinho/inserir/${userEmail}/${props.match.params.id}`)
    }

    useEffect(()=>{
        loadProduct()
    }, [setProduto])
        
    return(
        <>
        <div className="voltar">
            <a href="#"><BsArrowLeft /> Voltar</a>
        </div>
            <article>
                <div className="produto">
                    <div className="produto-imagem">
                        <img src={produto.imagem} alt={produto.imagem} />
                    </div>
                </div>
                <div className="produto-info">
                        <h2 className="titulo">{produto.nome}</h2>
                        <p className="genero">Gênero: {produto.genero}</p>
                        <p className="marca">Marca: {produto.genero}</p>
                        <h2 className="preco">R$ {produto.valor}</h2>

                    <div className="cor"> 
                        <form>
                        <h2>Cor</h2>
                        <label for={produto.cor}><div></div></label>
                        <input type="radio" id={produto.cor} />
                        </form>
                    </div>

                    <div className="botões">
                        <button type="submit" className="comprar" onClick={addCarrinho}>Comprar</button>
                    </div>
                </div>
            </article>
        </>
    );
}