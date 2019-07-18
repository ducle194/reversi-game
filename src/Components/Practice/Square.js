import React from 'react'

const Square = (props) => {
  let cssClass = props.value ? (props.value === 'X' ? 'marker black' : 'marker white') : null;
    return (
        <div className="square" onClick={props.onClick}>
          <div className={`${cssClass}`}></div>
        </div>
      );
}

export default Square;

//    background: white;
// width: 50%;
// height: 50%;
// border-radius: 50%;
// transform: translate(50%, 50%);
