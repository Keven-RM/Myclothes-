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
                <h2>Myclothes</h2>
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
                    <li><FaShoppingCart/></li>
                    <li><FaBell/></li>
                    <li><FaUserAlt/></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;

