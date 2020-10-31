import React from 'react';

class Scammer extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.scammer}</h1>
                <h3>Неизвестный номер</h3>
            </div>
        );
    }
}

export default Scammer;