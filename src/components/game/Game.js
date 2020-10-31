import React from 'react';
// import Call from './Call';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

class Game extends React.Component {
    // constructor(props) {
    //     super(props);
        
    //     // imitate data from mongodb
    //     this.state = {
    //         id: 0,
    //         scammer: '+79841045637',
    //         score: 0,
    //     }
    // }

    render() {
        console.log(this.props.location.state);
        return(
            <div>class Game</div>
            // <Router>
            //     <div className="game">
            //         <Link 
            //             to={{
            //                 pathname: "/level",
            //                 state: { id: 0 },
            //             }} 
            //         >Class Call</Link>
            //     </div>
            //     <Switch>
            //         <Route path="/level">
            //             <Call />
            //         </Route>
            //     </Switch>
            // </Router>
        );
    }
}

export default Game;