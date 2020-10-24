import React, { Component } from 'react';
import View from './View';
import './Header.css';
import Router, {Link} from "react-router-dom";

 class Header extends Component {

   
    render() {
        return (
            <div className="hederi">
                <h1 className="logo">RESTAURANT</h1>

                <div className="links">
                    <Link to ="/" className="link">Home</Link>
                    <Link to="/gallery" className="link">Gallery</Link>
                    <Link to="/meny" className="link">Meny</Link>
                    <Link to="/contact" className="link">Contact</Link>
                </div>
            </div>
        )
    }
}
export default Header;