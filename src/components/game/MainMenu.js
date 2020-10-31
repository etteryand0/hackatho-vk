import React from 'react';
import {Link} from "react-router-dom";

class MainMenu extends React.Component {
    render() {
        return (
            <main>
                <img alt="logo" />
                <h2 id="game-title">АнтиМошенник</h2>
                <p>
                    {/* Описание игры */}
                    Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor
                </p>
                <Link to={{
                    pathname:"/game",
                    search:"?level=0"
                }}>
                    <button>Начать</button>
                </Link>
            </main>
        );
    }
}

export default MainMenu;