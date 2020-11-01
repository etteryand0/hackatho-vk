import React from 'react';
import { ReactComponent as Photo } from './../scammer.svg';
import { ReactComponent as Decline } from './../decline.svg';
import { ReactComponent as Accept } from './../accept.svg';
import styles from './styles/Scammer.module.css';
import GenerateMessage from './GenerateMessage';

class Scammer extends React.Component {
    render() {
        if (this.props.call) {
            return(
                <div>
                    <div className={styles.scammer}>
                        <Photo />
                    </div>
                    <div className={styles.scammer_info}>
                        <br />
                        <p>
                            Неизвестный номер
                        </p>
                        <br />
                        <small>
                            {this.props.scammer}
                        </small>
                    </div>
                    <div className={styles.wrapper}>
                        <button onClick={() => this.props.onClick([true,
                                                       this.props.dialogue.reaction.yes.dialogue.score])}
                                className={styles.button}
                        >
                        <Accept className={styles.accept} />
                        </button>

                        <button onClick={() => this.props.onClick([false,
                                                       this.props.dialogue.reaction.no.dialogue.score])}
                                className={styles.button}
                        >
                        <Decline className={styles.decline} />
                        </button>

                    </div>
                </div>
            );
        } else {
            if (this.props.game_over) {
                return(
                    <div>
                        <GenerateMessage 
                            onClick={(data) => this.choice(data)}
                            messages={this.props.messages}
                            game_over={this.props.game_over}
                            score={this.props.score}
                            id={this.props.id}
                            styles={styles}
                            dialogue={this.props.dialogue}
                            />
                    </div>
                );
            } else {

                return(
                    <div>
                    <div className={styles.center}>
                        <h2>Неизвестный номер</h2>
                        <small>{this.props.scammer}</small>
                    </div>
                    <GenerateMessage 
                        dialogue={this.props.dialogue} 
                        onClick={(data) => this.props.onClick(data)}
                        messages={this.props.messages}
                        game_over={this.props.game_over}
                        score={this.props.score}
                        id={this.props.id}
                        styles={styles}
                        />
                    </div>
                );
            }
        }
    }
}

export default Scammer;