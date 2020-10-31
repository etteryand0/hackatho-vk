import React from 'react';
import Scammer from './Scammer';
import Dialogue from './Dialogue';

class Call extends React.Component {
    render() {
        console.log(this.props.id)
        console.log(this.state)
        return(
            <div className="game-area">
                <Scammer />
                <Dialogue />
            </div>
        );
    }
}

export default Call;