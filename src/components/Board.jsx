
import {Square} from './Square';
import { useState } from "react";

export function Board(){
    const [xIsNext, setXIsNext] = useState(true);
    const [squares,setSquares]= useState(Array(9).fill(null));
    const [winnerInfo, setWinnerInfo] = useState({ winner: null, line: [] });

    const [time,setTime] = useState(0);
    const result = calculateWinner(squares);

    let status;
    result. winner ? status = "Ganador: " + result.winner:      status = "Siguiente jugador: " + (xIsNext ? "X" : "O"); 
    


    if (result.winner){
        status = "Ganador: " + result.winner;

    }


    function handleClick(i){
        if (squares[i] || result.winner){
            return;
        }
        

        setTime(time+1);
        const nextSquares = squares.slice();
        xIsNext ?  nextSquares[i]="X": nextSquares[i]="O";


        setSquares(nextSquares);
        setXIsNext(!xIsNext);

    


    }


    const handleReset = () => {
      setSquares(Array(9).fill(null)); // Restablecer el tablero
      setWinnerInfo({ winner: null, line: [] }); // Restablecer la información del ganador
      setXIsNext(true); // Volver a empezar con X
      setTime(0);
    };

    
    
    
    return (

        <>
        
              <div className="status">{status}</div>
            <h2>Estas en el movimiento {time}</h2>
        <div className='container'>
        <Square value= {squares[0]} onSquareClick={()=> handleClick(0)}  />
        <Square value= {squares[1]} onSquareClick={()=> handleClick(1)}  />
        <Square value= {squares[2]} onSquareClick={()=> handleClick(2)} />
        <Square value= {squares[3]} onSquareClick={()=> handleClick(3)} />
        <Square value= {squares[4]} onSquareClick={()=> handleClick(4)}  />
        <Square value= {squares[5]} onSquareClick={()=> handleClick(5)} />
        <Square value= {squares[6]} onSquareClick={()=> handleClick(6)} />
        <Square value= {squares[7]} onSquareClick={()=> handleClick(7)} />
        <Square value= {squares[8]} onSquareClick={()=> handleClick(8)} />







        </div>
        <button className="reset" onClick={handleReset}>Reiniciar Juego</button>


        </>


    )
  
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
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {winner: squares[a],line:[a,b,c]};
      }

    }
    return {winner:null,line:[]};

  }

