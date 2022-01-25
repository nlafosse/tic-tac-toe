import React from "react";

function App() {
  function refresh() {
    window.location.reload(false);
  }
  return (
    <div>
      <button onClick={refresh}>Refresh </button>
    </div>
  );
}

function Square(props) {
  return (
    <div>
      <button onClick={props.onClick}>{props.value}</button>
    </div>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "x" : "o";

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const name = "Tic Tac Toe";
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner " + winner;
    } else {
      status = "Next player " + (this.state.xIsNext ? "x" : "o");
    }

    return (
      <div>
        <div>{name}</div>
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

        <div>
          <App />
        </div>
      </div>
    );
  }
}

export class Game extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Board />
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
    return null;
  }
}

export default App;
