import '../styles/Square.css'
export function Square({value,onSquareClick,winner}) {
 

    return <button className="square "  onClick = {onSquareClick}  >{value}</button>;
  }



    
  


