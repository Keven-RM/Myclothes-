import React, { Component, Link } from 'react';
import './styles.css'
import {BsArrowLeft} from 'react-icons/bs'

import api from '../../services/api'


export default class Lista extends Component{
    state = {
    product: []
};

componentDidMount(){
    this.LoadProducts();
}


LoadProducts = async () =>{
    const response = await api.get(`produto/${this.props.match.params.id}`)
    this.setState({ product: response.data });
    console.log(response.data)
};

    render(){        
        const { product } = this.state;
    return(
        <>
        <div className="voltar">
            <Link to="#"><BsArrowLeft /> Voltar</Link>
        </div>
            <article>

                <div className="produto">
                    <div className="produto-imagem">
            
                <img src={product.imagem} alt={product.nome} />
                    </div>
                </div>
                
                <div className="produto-info">
                    <h2 className="titulo">{product.nome}</h2>
                    <p className="info">Gênero: {product.genero}</p>
                    <p className="info">Marca: {product.marca}</p>
                    <p className="info" className="descricao">Detalhes: {product.descricao}</p>
                    <h2 className="preco">R$ {product.valor}</h2>
                <div className="cor"> 
                    <form>
                    <h2>Cor</h2>
                    <label for={product.cor}><div></div></label>
                    <input type="radio" id={product.cor} />
                    </form>
                </div>

                <div className="botões">
                    <button type="submit" className="carrinho">Adicionar ao carrinho</button>
                    <button type="submit" className="comprar">Comprar</button>
                </div>
                </div>
            </article>
        </>
    );
    }
}
