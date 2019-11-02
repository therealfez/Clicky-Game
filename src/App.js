import React, { Component } from "react";
import Characters from "./friends.json";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";


// shuffle upon each click
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    Characters,
    score: 0,
    topScore: 0,
    showAlert: 0,
    showSuccess: 0,
    clickedCharacters: []
  };

  clickedImage = id => {
    let clickedCharacters = this.state.clickedCharacters;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0
    });

    if (clickedCharacters.indexOf(id) === -1) {
      clickedCharacters.push(id);
      console.log(clickedCharacters);
      this.handleIncrement();
      this.makeShuffle();
    } else if (this.state.score === 12) {
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedCharacters: []
      });
    } else {
      this.setState({
        score: 0,
        clickedCharacters: []
      });
      console.log("duplicate");
      this.setState({
        showAlert: 1
      });
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };

  makeShuffle = () => {
    this.setState({ Characters: shuffle(Characters) });
  };

  
  render() {
    return (
      <div className="container">
        <div
          className="alert alert-danger"
          style={{ opacity: this.state.showAlert }}
        >
          You already clicked on this character. Please Try again.
          </div>
        <div
          className="alert alert-success"
          style={{ opacity: this.state.showSuccess }}
        >
          Great job! You did not click on any cartoon character more than once.
          </div>
        <Scoreboard
          title="Cartoon Character Clicky Game"
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="row">
          {this.state.Characters.map(Character => (
            <Card
              key={Character.id}
              id={Character.id}
              title={Character.name}
              image={Character.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
