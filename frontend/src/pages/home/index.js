import React from 'react';
import './styles.css';
import Image from '../../image.jpg'

import { GiArmoredPants, GiRunningShoe} from 'react-icons/gi';
import { FaTshirt, FaTransgender } from 'react-icons/fa';

const Lista = () =>{
    return(
        <>
        <>
        <main className="welcome">
            <h1>MyClothes</h1>
            <p>O seu produto a um click de distância!</p>
        </main>
        </>
        <section className="new-products">
            <main>
                <h1>Novos produtos</h1>
                <div className="scroll">
                <ul>
                        <li>
                        <a href="/i">
                        <div className="product-image">
                            <img src={Image} alt={Image} />
                        </div>
                        <div className="product-info" >
                            <p>R$ 200,00</p>
                            <p>Calça Jeans</p>
                        </div>
                        </a>
                        </li>  
                        <li>
                        <a href="/i">
                        <div className="product-image">
                            <img src={Image} alt={Image} />
                        </div>
                        <div className="product-info" >
                            <p>R$ 200,00</p>
                            <p>Calça Jeans</p>
                        </div>
                        </a>
                        </li>  
                        <li>
                        <a href="/i">
                        <div className="product-image">
                            <img src={Image} alt={Image} />
                        </div>
                        <div className="product-info" >
                            <p>R$ 200,00</p>
                            <p>Calça Jeans</p>
                        </div>
                        </a>
                        </li>  
                </ul>
                </div>
            </main>
        </section>
        <>
        <section className="category">
            <h1>Categoria</h1>
            <ul>
                <li><GiArmoredPants className="icons"/> <p>Calça</p></li>
                <li><FaTransgender className="icons"/><p>Gênero</p></li>
                <li><GiRunningShoe className="icons"/><p>Tênis</p></li>
                <li><FaTshirt className="icons"/><p>Camisa</p></li>
            </ul>
        </section>
        </>
        </>
    )
}

export default Lista;