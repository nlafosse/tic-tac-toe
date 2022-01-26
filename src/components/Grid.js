import React from "react";
import Square from "./Square";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: Array(9).fill(null),
      playerX: true,
    };
  }

  handleClick(i) {
    const letters = this.state.letters.slice();
    if (calculateWinner(letters) || letters[i]) {
      return;
    }

    letters[i] = this.state.playerX ? "x" : "o";

    this.setState({
      letters: letters,
      playerX: !this.state.playerX,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.letters[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.letters);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Current Player: " + (this.state.playerX ? "x" : "o");
    }

    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

        <div>{status}</div>
      </div>
    );
  }
}
function calculateWinner(letters) {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < rows.length; i++) {
    const [a, b, c] = rows[i];
    if (letters[a] && letters[a] === letters[b] && letters[a] === letters[c]) {
      return letters[a];
    }
    return null;
  }
}

export default Grid;
