import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Box from './component/box';

const choice = {
  rock:{
    name: "Rock",
    image: "https://scienceresourcebox.co.nz/cdn/shop/files/Chalkrounded_WEB_1200x1200.jpg?v=1684441843",
  },
  paper:{
    name: "Paper",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2OORn9lsgcpWCXlSvL_cgsUVPkvnYiwdOA&s",
  },
  scissors:{
    name: "Scissors",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9BV4Kc9SpC_zXaHUC0i3RluX31F5zFaRa6Q&s",

  }
}

function App() {
  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect] = useState(null);
  const play = (userChoise)=>{
    setUserSelect(choice[userChoise]);

    let computerChoice = randomChoice()
    setComputerSelect(computerChoice);
    
    setResult(judgement(choice[userChoise], computerChoice));
    // console.log("aaa", userChoise)
  }

  const [result,setResult] = useState("");

  const randomChoice = ()=> {
    let itemArray = Object.keys(choice);
    
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
    console.log(randomItem);
  }

  const judgement = (user,computer) => {
    if (user.name === computer.name){
      return "tie";
    }else if(user.name === "Rock")
      return computer.name === "Scissor"? "win":"lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper"? "win":"lose";
    else if (user.name === "Paper") 
      return computer.name === "Rock"? "win":"lose";

  }

  return (
    <>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/> 
        <Box title="Opponent" item={computerSelect} result = {result}/> 
        
      </div>  
      <div className='main'>
        <button onClick={()=>play("paper")}>Paper</button>         {/* make it a call back - prevent playing */}
        <button onClick={()=>play("rock")}>Rock</button>
        <button onClick={()=>play("scissors")}>Scissors</button>
      </div>
      
      

      <div className='result'>Result = {result}</div>
      
    </>
    
  );
}

export default App;
