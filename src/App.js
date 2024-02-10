import React, { useState, useEffect } from 'react'
import "./App.css"

function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [warningA, setWarningA] = useState('');
  const [warningB, setWarningB] = useState('');


  useEffect( ()=>{
    if(scoreA < 0){
      setWarningA('Not less than 0');
    }
    else if(scoreA === 10){
      alert('Winner Team A');
    }
    else if(scoreA > 10){
      setWarningA('Not greater than 10');
    }
    else{
      setWarningA('');
    }
  }, [scoreA])

  useEffect( ()=>{
    if(scoreB < 0){
      setWarningB('Not less than 0');
    }
    else if(scoreB === 10){
      alert('Winner Team B');
    }
    else if(scoreB > 10){
      setWarningB('Not greater than 10');
    }
    else{
      setWarningB('');
    }
  }, [scoreB])

  function resetScores() {
    setScoreA(0);
    setScoreB(0);
  }


  return (
    <div>
      <h1 className='title'>Score Keeper</h1>
      <div className='team-container'>

        <div className='team-card'>
          <h1>Team A</h1>
          <p className='warning-text'>{warningA}</p>
          <div className='btn-container'>
            <button onClick={() => {
              setScoreA(scoreA - 1);
            }}>
              -
            </button>
            {scoreA}
            <button onClick={() => {
              setScoreA(scoreA + 1);
            }}>
              +
            </button>
          </div>
        </div>

        <div className='team-card'>
          <h1>Team B</h1>
          <p className='warning-text'>{warningB}</p>
          <div className='btn-container'>
            <button onClick={() => {
              setScoreB(scoreB - 1);
            }}>
              -
            </button>
            {scoreB}
            <button onClick={() => {
              setScoreB(scoreB + 1);
            }}>
              +
            </button>
          </div>
        </div>

      </div>
      <button onClick={resetScores} className='btn-reset'>Reset Scores</button>
    </div>
  )
}

export default App