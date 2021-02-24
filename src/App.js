 import React,{useEffect, useState} from 'react';  //import this line to use the useState.
 import './App.css';

function App() {
          
  const products=[
              {name:'Photoshop c',price:'$7'},
              {name:'Adobe Illustrate',price:'$29'},
              {name:'Adobe Premiere Pro',price:'$70'},
              {name:'Photoshop After effect',price:'$33'},
              {name:'Photoshop 2020',price:'$200'}
           ]
              
   
  
  const players=[
    {name:'Sakib al hasan',position:'all rounder'},
    {name:'Mashrafe Mortaza',position:'bowler'},
    {name:'Tamim Iqbal',position:'Batsmen'},
    {name:'Musfiqur Rahim',position:'WK & Batsmen'},
    {name:'Liton Das',position:'Opener Batsmen'}
     
  ]

  return(
    <div className="App">
       <header className="App-header">
       <Counter></Counter>  {/*function call by html tag system.*/}
        <Users></Users>
            {
               products.map(product=><Products name={product.name} price={product.price}></Products>) /* function call by html system and using dynamic call inside from this html tag. */
              
            }
          
            {
              players.map(player=><Person player={player.name} position={player.position}></Person>)
            }
         
    
      </header> 
    </div>
  );
}

 function Counter(){
   const [count, setCount] = useState(0);  // This useState method is used to count the product count system. inside useState(0) here 0 is the initial value that is represent by count and setCount is used to increase or decrease the count value.

  // const handlerCount=(()=>setCount() )    //Increment the value in this system. this system may be use or not use <button onClick={()=>setCount(count+1)}>increase</button> this system we can increase or decrease the value.
  //   const newCount=count+1;
  //   setCount(newCount);
   
  return (
    <div>
        <h3>Count:{count}</h3>
        <button onClick={()=>setCount(count+1)}>increase</button>
        <button onClick={()=>setCount(count-1)}>decrease</button>
   </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
    useEffect(() =>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(data=>setUsers(data))
    }
 )

  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
      
    </div>
  )
}



function Products(props){
  const productStyle={
    backgroundColor:'gray',  
    width:'400px',
    height:'300px',
    padding:'5px',
    color:'orange',
    textAlign:'center',
    margin:'6px',
    fontSize:'25px',
    borderRadius:'5px'

  }
  return (
    <div style={productStyle}>
      <h2>{props.name}</h2>
      <h3>{props.price} </h3>
      <button style={{padding:'5px',color:'#0a0a7b',fontWeight:'bold'}}>Buy Now</button>
    </div>
  )
}

 function Person(props){
   const style={
     color:'orange',
    border:'2px solid red',
    padding:'5px',
    margin:'6px',
    borderRadius:'5px'
   }
  return (
     
     <div style={style}>
        <h2>Name: {props.name} </h2>
        <h3>Position: {props.position}</h3>
     </div>
    

        )
 }
 

export default App;

 