import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Register } from './Register'

class Main extends React.Component {
    
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path="/register" component={Register}/>
                </Switch>
            </div>
        );
    };
}

export default Main;