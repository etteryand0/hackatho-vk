import React from 'react';

class GenerateMessage extends React.Component {  
    render() {
      let i = 1
      let styles = 'message-scammer'
      console.log(this.props.dialogue)
      return(
        <div>
          {this.props.messages.map(message => {
              if (i % 2 === 0) {
                styles = 'message-player'
              } else {
                styles = 'message-scammer'
              }
              i += 1
              return (
               <div className={styles} key={i}>
                 {message}
                 <br /> <br />
               </div>
             );
           })}
          <p style={{'color':'red'}}>
            {this.props.dialogue.fishnet}
          </p>
          <button onClick={() => this.props.onClick()}>a</button>
          <button onClick={() => this.props.onClick()}>b</button>
        </div>
      );
    }
}

export default GenerateMessage;