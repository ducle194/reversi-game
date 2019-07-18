import React from 'react';
import Square from './Square.js';

export default class Board extends React.Component {
 
  renderSquare = i => 
    <Square 
      key={i}
      value={this.props.board[i]}
      onClick={() => this.props.onClick(i)} />

  render() {
    const rows = [];
    for (let y = 0; y < 8; y++){
      let col = [];
      for (let x = 0; x < 8; x++){
        col.push(this.renderSquare(x + y*8))
      }
      rows.push(<div className="board-row" key={y}>{col}</div>)
    }
    
    return <div className="board">{rows}</div>
  }
}