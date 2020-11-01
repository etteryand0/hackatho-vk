import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { ReactComponent as Photo } from './../scammer.svg';

class GenerateMessage extends React.Component {  
    plural(score) {
      let num;
      if (score > 0) {
        num = '+' + score + ' баллов'; 
      } else {
        num = '-' + score + ' баллов';
      }
      return num;
    }
    recent_message() {
      let score;
      if (this.props.score === 0) {
        score = '0 баллов'
      } else { 
        if (Math.abs(this.props.score) > 4) {
          // plural
          score = this.plural(this.props.score)
        } else {
          score = this.props.score + ' балла';
        }
      } 
      console.log(score)
      if (this.props.game_over) {
        console.log(this.props.score)
        return(
          <div className={this.props.styles.message_gameover}>
            <h2>{score}</h2>
            {this.props.dialogue.fishnet}
            <br />
            <Router>
              <Link to={{
                pathname:"/hackathon-vk/game",
                search:`?level=${this.props.id + 1}`
              }}>Новый уровень</Link>
            </Router>
          </div>
        );
      } else {
        return(
          <div className={this.props.message_scammer}>
            <Photo className={this.props.styles.profile_pic} />
            <span className={this.props.styles.message}>
              {this.props.dialogue.fishnet}
            </span>
            
            <div className={this.props.styles.choice_button_wrapper}>
            <button onClick={() => this.props.onClick([true,
                                                       this.props.dialogue.reaction.yes.dialogue.score])}
                                                       className={this.props.styles.choice_button}
                                                       >{this.props.dialogue.reaction.yes.dialogue.answer}</button>
            <button onClick={() => this.props.onClick([false,
                                                       this.props.dialogue.reaction.no.dialogue.score])}
                                                       className={this.props.styles.choice_button}
                                                       >{this.props.dialogue.reaction.no.dialogue.answer}</button>
            </div>
          </div>
        );
      }
    }  

    render() {
        if (this.props.messages[0] === undefined) {
          let messages = this.props.messages;
          messages.shift()
        }
        let i = 0;
        let styles;
        return(
        <div>
          {this.props.messages.map(message => {
            i += 1
            if (this.props.game_over) {
              styles = 'message-gameover'
            }
            if (i % 2 === 1) {
              styles = this.props.styles.message_player;
            } else {
              styles = this.props.styles.message_scammer;
            }
            return (
              <div className={styles} key={i}>
                  <Photo className={this.props.styles.profile_pic} />
                  <span className={this.props.styles.message}>{message}</span>
               </div>
             );
            })}
          {this.recent_message()}
        </div>
      );
    }
  }
  
  export default GenerateMessage;