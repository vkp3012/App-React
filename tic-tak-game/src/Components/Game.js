import React, { Component } from 'react'

export default class Game extends Component {
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const result = this.calculateWinner(current.squares);
    const gameStatus = result && result.status ? result.status :null;

    const moves = history.map((move,index) =>{
        const desc = index ? "Go to move #" + index: "Go to game start"

        let active = "";
        if(move.active){
            active = "active";
        }else{
            active = "normal";
        }
        return (
            <li key={index}>
                <button
                    className={active}
                    key={`${move.location.col}_${move.location.row}`}
                    onClick={() => this.jumpTo(index)}
                >
                    {`${desc} (${move.location.col}, ${move.location.row})`}
                </button>
            </li>
        );
    });
    moves.sort((a,b)=>{
        if(this.state.toggle){
            return b.key - a.key;
        }else{
            return a.key - b.key;
        }
    });

    let status;

    if(gameStatus === "win"){
        status = `Winner: ${result.win.player}`;
    }else{
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className='game'>

        gameStatus === "draw" ? (
            <div className='draw'>
                <h2>Draw!</h2>
                <button onClick={() => this.reset()}>Play again</button>
            </div>
        ):(
            
        )
      </div>
    )
  }
}
