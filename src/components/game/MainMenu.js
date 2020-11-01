import React from 'react';
import {Link} from "react-router-dom";
import styles from  './styles/App.module.css';
import {ReactComponent as Logo} from './../logo.svg';

class MainMenu extends React.Component {
    render() {
        return (
            <main>
                
                <div className={styles.game_title}>Сэйвнет</div>
                
                <div className={styles.action_form}>
                    <div>
                        <p>
                            Пройдите квест-игру, чтобы научиться не попадаться на ловушки мошенников
                        </p>
                        <Logo />
                    </div>
                    <div>
                        <Link to={{
                            pathname:"/game",
                            search:"?level=0"
                        }}>
                            <button className={styles.button}>Начать</button>
                        </Link>
                    </div>
                </div>

            </main>
        );
    }
}

export default MainMenu;