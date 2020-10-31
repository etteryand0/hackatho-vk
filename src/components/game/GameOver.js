import React from 'react';
import {
  Redirect
} from "react-router-dom";

class GameOver extends React.Component {
  render() {
    console.log('lksdjlfkdsj')
    return(
      
      <div>gameover
        <Redirect to="/" />
      </div>
    );
  }
}

export default GameOver;