import React from 'react';
import './styles.css';
import Image from '../../image.jpg'

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
        </>
    )
}

export default Lista;