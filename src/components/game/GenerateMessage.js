import React from 'react';

class GenerateMessage extends React.Component {  
    recent_message() {
      if (this.props.game_over) {
        return(
          <div className="message-gameover">
            <h2>{this.props.score}</h2>
            {this.props.dialogue.fishnet}
          </div>
        );
      } else {
        return(
          <div className="message-scammer">
            {this.props.dialogue.fishnet}
            <br />

            <button onClick={() => this.props.onClick([true,
                                                       this.props.dialogue.reaction.yes.dialogue.score])}
            >yes</button>
            <button onClick={() => this.props.onClick([false,
                                                       this.props.dialogue.reaction.no.dialogue.score])}
            >no</button>
          </div>
        );
      }
    }  

    render() {
      let i = 1
      let styles = 'message-scammer'

      return(
        <div>
          {this.props.messages.map(message => {
              if (i % 2 === 1) {
                styles = 'message-player';
              } else {
                styles = 'message-scammer';
              }
              if (this.props.game_over) {
                styles = 'message-gameover';
              }
              i += 1
              return (
               <div className={styles} key={i}>
                 {message}
                 <br /> <br />
               </div>
             );
           })}
          {this.recent_message()}
        </div>
      );
    }
}

export default GenerateMessage;