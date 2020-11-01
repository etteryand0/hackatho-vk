import React from 'react';
import MainMenu from './components/game/MainMenu';
import Call from './components/game/Call';
import styles from  './components/game/styles/App.module.css';
import './components/game/styles/index.css';
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
                <header className={styles.static}></header>
                <Switch>
                    
                <Route exact path="/hackathon-vk/game">
                    <Call />
                </Route>
                <Route exact path="/hackathon-vk">
                    <MainMenu />
                </Route>
                <Route>
                    <Redirect to="/hackathon-vk" />
                </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;