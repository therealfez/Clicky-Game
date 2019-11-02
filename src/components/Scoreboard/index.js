import React from "react";

function Scoreboard(props) {
    return (

        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Cartoon Characters Clicky Game</h1>
                        <p className="lead">Can you click on every cartoon character just once?</p>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-6 col-left"><h5>{props.name}</h5></div>
                        <div className="col-md-3 col-right"><h6>Current Score {props.score}</h6></div>
                        <div className="col-md-3 col-right"><h6>Top Score: {props.topScore}</h6></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Scoreboard;
