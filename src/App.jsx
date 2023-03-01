import { useState } from 'react'
import phrases from './assets/data.json'
import Card from './components/Card/Card'
import './App.css'
import Fondos from './imagen/Fondos'

function App() {
  
const [indexPhrase,setIndexPhrase]=useState(0)
       const changePhrase=()=>{
        const aleatorio=Math.floor(Math.random()*phrases.length)
        
         setIndexPhrase(aleatorio);
       }

  
  return (
    <div className="App">
      <Card phrase={ phrases[indexPhrase] } changePhrase={changePhrase} />
    </div>
  )
}

export default App;
