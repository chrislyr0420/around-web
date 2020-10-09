import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Register } from './Register';
import { Login } from './Login';
import Home from './Home';

class Main extends React.Component {
    getLogin = () => {
        return this.props.isLoggedIn 
        ? <Redirect to="/Home" /> 
        : <Login handleLoginSucceed={this.props.handleLoginSucceed} />
    }

    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" render={this.getLogin}/>
                </Switch>
            </div>
        );
    };
}

export default Main;