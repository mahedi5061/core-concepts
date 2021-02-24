import logo from './logo.svg';
import './App.css';

function App() {
  const players=['Sakib al hasan','Mashrafe Mortaza','Tamim Iqbal','Musfiqur Rahim'];
  return(
    <div className="App">
       <header className="App-header">
        <Person name={players[0]} postion='All Rounder'></Person>
        <Person name={players[1]} postion='Bowler'></Person>
        <Person name={players[2]} postion='Batsmen'></Person>
        <Person name={players[3]} postion='WK & Batsmen'></Person>
      </header> 
    </div>
  );
}
 function Person(temp){
   const style={
     color:'orange',
    border:'2px solid red',
    padding:'5px',
    margin:'6px',
    borderRadius:'5px',
   }
  return (
     
     <div style={style}>
        <h2>Name: {temp.name} </h2>
        <h3>Position: {temp.postion} </h3>
     </div>
    

        )
 }
 

export default App;
