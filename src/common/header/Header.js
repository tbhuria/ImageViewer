import React, {Component} from 'react';
import './Header.css';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

class Header extends Component{
    render(){
        return(
            <div>
            <header className="app-header">
                <span className="side-logo">Image Viewer</span>
            </header>
            
            </div>
        )   
     }
}
export default Header;