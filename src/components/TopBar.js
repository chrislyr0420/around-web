import React from 'react';
import { Icon } from 'antd';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

class TopBar extends React.Component {

    render() {
        return (
            <header className="App-header">
                <img src={logo} alt="logo" className="App-logo"/>
                <span className="App-title">Around</span>
                {this.props.isLoggedIn 
                    ? <a className="logout" onClick={this.props.handleLogout} >
                       <Icon type="logout"/>{' '}Logout
                    </a> 
                    : null 
                }
            </header>
        );
    };
}

export default TopBar;