import React from 'react';
import MainMenu from './components/game/MainMenu';
import Call from './components/game/Call';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

class App extends React.Component {
    render() {
        return(
            <Router>
                <Switch>
                    
                <Route exact path="/game">
                    <Call />
                </Route>
                <Route exact path="/">
                    <MainMenu />
                </Route>
                <Route>
                    <Redirect to="/" />
                </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;