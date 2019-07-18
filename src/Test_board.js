import React from 'react';
import Square from './Square.js';
import {isValidMove_ENGINE, makeMove_ENGINE} from './System';
import AI from './Ai';

class Board extends React.Component {

  componentDidMount() {
    const ai = new AI(10, 10);
    console.log(ai);
    console.log(this.state.board1)
  }

	constructor(){
        super();

        const x     = Array(8).fill(null);
        const board1 = Array(8).fill(x); 
        [board1[3][3], board1[4][3], board1[3][4], board1[4][4]]= ["O", "•", "•", "O"]
        this.state = {
          board: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, "•", "O", null, null, null],
            [null, null, null, "O", "•", null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
        ],
        board1,
          blackIsNext: true,
        }
    }

    handleClick = (c, x, y) => {
      if(isValidMove_ENGINE(this.state.blackIsNext, this.state.board, x, y)){
        const board = this.state.board.slice();
        if(board[x][y]) return 
        // Make move in here
        makeMove_ENGINE(this.state.blackIsNext, this.state.board, x, y);
        this.setState({board, blackIsNext: !this.state.blackIsNext})
      }
    }

  render() {
    let status = `Player turn: ${this.state.blackIsNext ? '•' : 'O'}`;
    const row = this.state.board.map((row, y) => (
        <div key={y} className="board-row">
            {row.map( (c, x) => (
            <Square
                key={x}
                key-x={x}
                key-y={y}
                value={this.state.board[x][y]}
                onClick={() => this.handleClick(c, x, y)} />))
               
            }
        </div>
    ));

    return (
      <div style={style}>
        <div className="status">{status}</div>
           {row}
      </div>
    );
  }
}

const style = {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  flexDirection: "column",
}

export default Board;