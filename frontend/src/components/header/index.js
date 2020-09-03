import React from 'react';
import './styles.css';

//icones
import { IoMdPerson,
         IoIosSearch,
         IoMdCart,
} from 'react-icons/io';

const Header = () =>{
    return(
        <header>
            <h1>Myclothes</h1>
            <form className="search-bar">
                <input type="text" placeholder=" Pesquise pelo produto" name="search"/>
                <button type="submit"><IoIosSearch className="icons" alt="icone de pesquisa"/></button>
            </form>
            <ul className="perfil-options">
                <li className="cart">
                    <IoMdCart className="icons" alt="carrinho de compras"/>
                </li>
                <li className="perfil-icon">
                    <IoMdPerson className="icons" alt="icone do perfil"/>
                </li>
            </ul>
        </header>
    );
}

export default Header;

