import React from 'react';
import Game from './Game';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class MainMenu extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    
                <Route path="/level">
                    <Game />
                </Route>
                <Route exact path="/">
                    <main>
                        <img alt="logo" />
                        <h2 id="game-title">АнтиМошенник</h2>
                        <p>
                            {/* Описание игры */}
                            Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor
                        </p>
                        <Link
                            to={{
                                pathname: "/level",
                                // TODO Какого-то фига Link не передаёт state
                                state: {
                                    fromNotifications: true
                                  }
                            }}
                        >
                            <button>Начать</button>
                        </Link>
                    </main>
                </Route>

                </Switch>
            </Router>
        );
    }
}

export default MainMenu;