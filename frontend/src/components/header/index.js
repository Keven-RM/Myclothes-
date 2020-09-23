import React from 'react';
import './styles.css';

//icones - react-icons 
import { 
    FaSistrix,
    FaBell,
    FaShoppingCart,
    FaUserAlt
} from 'react-icons/fa';


const Header = () =>{
    return(
        <header>
            <div className="title">
                <h1>Myclothes</h1>
            </div>
            <div className="search-bar">
                <form>
                    <input name="search" type="text" />
                    <button type="submit">
                        <FaSistrix />
                    </button>
                </form>
            </div>
            <div className="perfil">
                <ul>
                    <li><FaShoppingCart className="icons" /></li>
                    <li><FaBell className="icons" /></li>
                    <li  className="perfil-icon"><FaUserAlt className="icons"/></li>
                </ul>
            </div>
        </header>
    )
    
}

export default Header;