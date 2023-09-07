import { useState } from "react";
import {introQuestion , instanceType} from "./data" ; 

export default function App() {
  const [mainPage , setMainPage] = useState(true) ;  
  const [error , setError] = useState("") ; 
  return (
    <div className="container">
      {error && <Error message={error} onClick={setError}/>}
      <Header onClick={setMainPage}/>
      {mainPage && <Intro onClick={setMainPage}/>}
      {!mainPage && <Compare setError={setError}/>}
    </div>
  );
}

function Error({message , onClick}){
  return(
    <div class="warning">
      ⚠️ {message}
      <button class="btn-close" onClick={()=>onClick("")}>X</button>
    </div>
  );
}

function Header({onClick}){
  return(
    <header>
      <img className="home-icon" alt="home-icon" src="img/home-icon.png" onClick={()=>onClick(true)}/>
      <a href="https://us-east-1.console.aws.amazon.com/console/home?region=us-east-1"><img className="logo" src="img/w-logo.svg" alt="aws-logo"/></a>
    </header>
  );
} 

function Intro({onClick}){
  return(
    <div className="intro">
      {
        introQuestion.map((i)=><Question question={i} key={i.id}/>)
      }
      <button onClick={()=>onClick(false)}> Compare between two instance types </button>
    </div>
  );
}

function Question({question}){
  const [open , setOpen] = useState(false) ; 
  return(
    <div className="questions">
      <div className="question">
        <p>{question.question}</p> 
        <img src={open ? "img/w-arrow-up.png" : "img/w-arrow-down.png"} alt="arrow" onClick={()=>setOpen((e)=>!e)}/>
      </div>
      {open && <div className="answer">
                  {question.id!==5 ? <p> 
                    {question.answer}
                    {question.readMore && <span> <a href={question.readMore}> read more</a> </span>} 
                  </p> :
                  <>
                    <ul>
                      {question.answer.map((i)=><li>{i}</li>)}
                    </ul>
                    <span> <a href={question.readMore}> read more</a> </span>
                  </>
                  }
              </div>
      }
    </div>
  );
}



function Compare({setError}){
  const [type1 , setType1] = useState("") ;
  const [type2 , setType2] = useState("") ; 
  const [showCompare , setShowCompare] = useState(false) ; 

  function handleSubmit(e){
    e.preventDefault() ; 
    if(type1.length===0){
      setError("should select type 1!") ; 
    }
    else if(type2.length===0){
      setError("should select type 2!") ;
    }
    else if(type1 === type2){
      setError("should select different types to compare them!") ;
    }
    else{
      setError("") ;
      setShowCompare(true) ; 
    }
  }

  return(
    <div className="form-container">
      {showCompare && <img className="back" src="img/back-icon.png" alt="back" onClick={()=>setShowCompare(false)}/>}
      {!showCompare && <CompareForm setType1={setType1} setType2={setType2} handleSubmit={handleSubmit}/>}
      {showCompare && <CompareTable type1={type1} type2={type2}/>}
    </div>
  );
}

function CompareForm({setType1 , setType2 , handleSubmit}){
  return(
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="form-control">
        <label>Type 1 :  </label>
        <select name="type1" onChange={(e)=>setType1(e.target.value)}>
          <option hidden disabled selected value> select instance type 1 </option>
          <option value="GeneralPurpose" >General Purpose</option>
          <option value="ComputeOptimized">Compute Optimized</option>
          <option value="MemoryOptimized">Memory Optimized</option>
          <option value="AcceleratedComputing">Accelerated Computing</option>
          <option value="StorageOptimized">Storage Optimized</option>
        </select>
      </div>

      <div className="form-control" >
        <label>Type 2 :  </label>
        <select name="type2" onChange={(e)=>setType2(e.target.value)}>
          <option hidden disabled selected value> select instance type 2</option>
          <option value="GeneralPurpose" >General Purpose</option>
          <option value="ComputeOptimized">Compute Optimized</option>
          <option value="MemoryOptimized">Memory Optimized</option>
          <option value="AcceleratedComputing">Accelerated Computing</option>
          <option value="StorageOptimized">Storage Optimized</option>
        </select>
      </div>
      <button>compare</button>
    </form>
  );
}

function CompareTable({type1 , type2}){
  return(
    <div className="table">
      <div className="cell">
        {instanceType[type1]?.name}
      </div>
      <div className="cell">
        {instanceType[type2]?.name}
      </div>
      <div className="cell">
        <p>
          {instanceType[type1]?.discription}
          <span> <a href={instanceType[type1]?.readMore}> read more</a> </span>
        </p>
      </div>
      <div className="cell">
        <p>
          {instanceType[type2]?.discription}
          <span> <a href={instanceType[type2]?.readMore}> read more</a> </span>
        </p>
      </div>
    </div>
  );
}