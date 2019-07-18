import React from 'react';
import Board  from "./Board";
import Score  from "./Score";

class Game extends React.Component {

	constructor(){
        const board = Array(64).fill(null);
        [board[8*3 + 3], board[8*3 + 4], board[8*4 + 3], board[8*4 + 4]] = ["X", "O", "O", "X"];

        super();
        this.state = {
            board,
            xIsNow: true,
            xNumbers: 2,
            oNumbers: 2
        }
    }

    flipSquares = (squares, position, xIsNow) => {
        let modifiedBoard = null;

        // Calculate row and col of the starting position
        let [startX, startY] = [position % 8, (position - position % 8)/8];
        if(squares[position] !== null) return null;

        // Iterate all directions, these numbers are the offsets in the array to reach next sqaure
        [7, 8, 9, 1, -1, -7, -8, -9].forEach( offset => {
            let flippedSquares = modifiedBoard ? modifiedBoard.slice() : squares.slice();
            let atLeastOneMarkIsFlipped = false;
            let [lastXpos, lastYPos] = [startX, startY];    

            for (let y = position + offset; y < 64; y = y + offset){
                
                // Calculate the row and col of the current square
                let [xPos, yPos] = [y % 8, (y - y % 8) / 8];

                // Fix when board is breaking into a new row or col
                if (Math.abs(lastXpos - xPos) > 1 || Math.abs(lastYPos - yPos) > 1) break;

                // Next square was occupied with the opposite color
                if(flippedSquares[y] === (!xIsNow ? "X" : "O")){
                    flippedSquares[y] = xIsNow ? "X" : "O";
                    atLeastOneMarkIsFlipped = true;
                    [lastXpos, lastYPos] = [xPos, yPos];
					continue;
                }

                // Next square was occupied with the same color
                else if ((flippedSquares[y] === (xIsNow ? "X" : "O")) && atLeastOneMarkIsFlipped) {
                    flippedSquares[position] = xIsNow ? "X" : "O";
					modifiedBoard = flippedSquares.slice();
				}
				break;
            }
        })
        return modifiedBoard;
    }

    calculateWinner = (xNumbers, oNumbers) => {
        return (xNumbers + oNumbers < 64) ? null : (xNumbers === oNumbers ? "XO" : (xNumbers > oNumbers ? "X" : "O"));
    }

    handleClick = i => {
        
        const current  = this.state.board.slice();
        if(current[i] && this.calculateWinner(this.state.xNumbers, this.state.oNumbers)) return;

        const changedSquares = this.flipSquares(current, i, this.state.xIsNow);
        if(changedSquares === null) return;

        const xNumbers = changedSquares.reduce((acc, current) => { return current === "X" ? acc + 1 : acc }, 0);
        const oNumbers = changedSquares.reduce((acc, current) => { return current === "O" ? acc + 1 : acc }, 0);
        let shouldTurnColor = !this.state.xIsNow; 
        this.setState({board: changedSquares, xIsNow: shouldTurnColor, xNumbers, oNumbers})
    }

  render() {
    let status = `Status: ${this.state.xIsNow ? "X" : "O"} is making moves.`;

    return (
        <div className="game">
            <div className="result-bg d-flex justify-content-center center-text mx-auto">
                <h1 className="result">Game start!</h1>
            </div>
            <p className="status" style={{textAlign:'center'}}>{status}</p>
            <div className="d-flex justify-content-around">                
                    <Board board={this.state.board} onClick={ i => this.handleClick(i)} />
                    <Score x={this.state.xNumbers} o={this.state.oNumbers} />
            </div>
        </div>
    );
  }
}

export default Game;