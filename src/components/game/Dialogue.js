import React from 'react';
import GenerateMessage from './GenerateMessage';

class Dialogue extends React.Component {
    render() {
        console.log(this.props.dialogue)
        return(
            <div>
                <GenerateMessage 
                    dialogue={this.props.dialogue} 
                    onClick={() => this.props.onClick()}
                />
            </div>
        );
    }
}

export default Dialogue;