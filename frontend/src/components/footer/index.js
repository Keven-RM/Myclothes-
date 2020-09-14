import React from 'react';
import './styles.css';


const Footer = () =>{
    return(
        <footer>
            <div className="title"><h1>Myclothes</h1></div>
            <ul>
                <li><a href="/sobre">sobre</a></li>
                <li><a href="/feedback">feedback</a></li>
                <li><a href="/contato">contato</a></li>
            </ul>
        </footer>
);
}

export default Footer;

