import React, { Component, useEffect, useState } from 'react'
import './styles.css'
import api from '../../../services/api'

export default class Cartao extends Component{
    state = {
        card: []
    };
    
    componentDidMount(){
        this.loadCard();
    }
    
    loadCard = async () =>{
        const response = await api.get(`/user/${sessionStorage.getItem('user-email')}`);
        this.setState({ card: response.data.cartao });
    };
    
    render(){        
        const { card } = this.state;
        console.log(card)
    return(
        <>
            <h2  className="user-title" >Meus Dados</h2>
            <h1>Conta</h1>
            <ul>
                {card.map(i=>(
                    <li key={i}>{i}</li>
                    
                ))}
            </ul>
            </>
        )
}
}