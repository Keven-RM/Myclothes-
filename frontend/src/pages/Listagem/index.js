import React, { Component } from 'react';
import {MdArrowForward, MdArrowBack} from 'react-icons/md'

import api from '../../services/api'
import './styles.css';

export default class Lista extends Component{
    state = {
        products: []
    };
    
    componentDidMount(){
        this.LoadProducts();
    }
    
    LoadProducts = async () =>{
        const response = await api.get("/produto/listar");
        
        this.setState({ products: response.data });
        console.log(response.data)
    };
    
    render(){        
        const { products } = this.state;
        return(
        <>
        <container>
        <main>
            <h1>Filtros</h1>
            <div className="preco">
                <form>
                    <h2>Preço</h2>
                    <label for="min">Min</label>
                    <input type="text" id="min" name="min"/>
                    <label for="max">Max</label>
                    <input type="text" id="max" name="max"/>
                    <button type="submit">Aplicar</button>
                </form>
            </div>
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

                <button type="submit">Aplicar</button>
                </form>
            </div>

            <div className="tamanho">
                <form>
                <h2>Tamanhos</h2>
                <input list="tamanhos" name="tamanho" />
                 <datalist id="tamanhos">
                    <option value="PP" />
                    <option value="P" />
                    <option value="M" />
                    <option value="G" />
                    <option value="GG" />
                    <option value="XGG" />
                 </datalist>
                 <button type="submit">Aplicar</button>
                 </form>
            </div>
            <div className="marca">
                <form>
                <h2>Marca</h2>
                <input list="marca" name="marca" />
                 <datalist id="marca">
                    <option value="nike" />
                    <option value="oakley" />
                    <option value="adidas" />
                    <option value="fila" />
                 </datalist>
                 <button type="submit">Aplicar</button>
                 </form>
            </div>
            <div className="genero">
                <form>
                    <h2>Gênero</h2>
                    <div className="labels">
                        <label for="feminino"><div>Feminino</div></label>
                        <label for="masculino"><div>Masculino</div></label>
                    </div>
                
                    <input type="radio" name="genero" id="masculino" value="masculino" />  
                    <input type="radio" name="genero" id="feminino" value="feminino" />  
                    <button type="submit">Aplicar</button>
                </form>
            </div>
        </main>
        <section className="listagem">
                <ul>
                    {products.map(product =>(
                        <li key={product.id}>
                        <a href="/i">
                            <div className="product-image">
                                <img src={product.imagem} alt={product.imagem}/>
                            </div>
                            <div className="product-info" >
                                <p>{product.nome}</p>
                                <p>R$ {product.valor}</p>
                            </div>
                        </a>
                        </li>
                    ))}
                </ul>
        </section>
        <div className="pagina">
            <button><MdArrowBack className="arrow" /></button>
            <h2>01</h2>
            <button><MdArrowForward className="arrow" /></button>
        </div>
        </container>
        </>

        )
    }
}