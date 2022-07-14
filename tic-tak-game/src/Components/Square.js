import React, { Component } from 'react'

export default class Square extends Component {
  render(props) {
    return (
        <button
            className={props.highlightWinSquares}
            onClick={props.updateStateOnClick}
        >
            {props.value}
        </button>
    )
  }
}
