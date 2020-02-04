import React, {Component} from 'react';
import logo from '../../cognitive-services-logo.png';


class Header extends Component {
    render(){
        return (
            <div className="Header">
               
                        
            <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src={logo} width="10%" height="" alt=""/>
            </a>
            </nav>

            </div>
        );   
    }
}

export default Header;
