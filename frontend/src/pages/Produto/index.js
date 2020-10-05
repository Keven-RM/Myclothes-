import React from 'react';

import './styles.css'
import Image from './image.png';

import {BsArrowLeft} from 'react-icons/bs'

const Produto = () =>{
    return(
        <>
        <div className="voltar">
            <a href="#"><BsArrowLeft /> Voltar</a>
        </div>
            <article>
                <div className="produto">
                    <div className="produto-imagem">
                        <img src={Image} alt={Image} />
                    </div>
                </div>
                <div className="produto-info">
                    <h2 className="titulo">Tênis Nike 270</h2>
                    <p className="genero">Gênero: Masculino</p>
                    <p className="marca">Marca: nike</p>
                    <h2 className="preco">R$ 370,00</h2>

                <div className="cor"> 
                    <form>
                    <h2>Cor</h2>
                    <label for="preto"><div></div></label>
                    <input type="radio" name="cor" id="preto" value="preto" />

                    <label for="azul"><div></div></label>
                    <input type="radio" name="cor" id="azul" value="azul" />

                    <label for="vermelho"><div></div></label>
                    <input type="radio" name="cor" id="vermelho" value="vermelho" />

                    <label for="amarelo"><div></div></label>
                    <input type="radio" name="cor" id="amarelo" value="amarelo" />

                    <label for="verde"><div></div></label>
                    <input type="radio" name="cor" id="verde" value="verde" />

                    <label for="branco"><div></div></label>
                    <input type="radio" name="cor" id="branco" value="branco" />

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

export default Produto