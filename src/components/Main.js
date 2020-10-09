import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Register } from './Register'
import { Login } from './Login'

class Main extends React.Component {
    
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        );
    };
}

export default Main;