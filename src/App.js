import React,{useState} from 'react';
import "./style.css"
const App=()=>{

    let [score,setScore]=useState(0)

    function add (a,b){     
        return a+b
    }


    return(
       <div>
           <h1>
               Hey this is my counter application
           </h1>
           <h3>
               The value of score is {score}
           </h3>
           {/* <button onClick={add(10,20)}> Increment </button> */}
           {/* <button onClick={()=>{add(setScore,1)}}> Increment </button> */}
           {/* <button onClick={()=>{setScore(score+1)}}> Increment </button> */}
           <button onClick={()=>(score<25)?setScore(score+1):""}> Increment </button>
           {/* <button onClick={()=>{setScore(score-1)}}> Decrement</button> */}
           <button onClick={()=>(score>0)?setScore(score-1):""}> Decrement</button>
           <button onClick={()=>{setScore(0)}}> Reset </button>
       </div>
    )
}
export default App;