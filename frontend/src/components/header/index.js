import React, { Component } from 'react';
import './styles.css';

//icones - react-icons 
import { 
    FaSistrix,
    FaBell,
    FaShoppingCart,
    FaUserAlt
} from 'react-icons/fa';

class Header extends Component {
    render(){
    return(
        <header>
            <div className="title">
                <h1>Myclothes</h1>
            </div>
            <div className="search-bar">
                <form>
                    <input name="search" type="text" />
                    <a href={`lista/${this.props.url}`}>
                        <FaSistrix />
                    </a>
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
}

export default Header;