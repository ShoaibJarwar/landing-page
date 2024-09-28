import React, { useEffect } from 'react'
import { useState } from 'react'
import Background from './Components/Background/Background'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'

const App = () => {
    let data = [
        {text1: "Coding is ", text2: "Love."},
        {text1: "Programming is ", text2: "everything."},
        {text1: "Coding is ", text2: "grand Finale."},
    ]
    const [heroCount, setHeroCount] = useState(2)
    const [playStatus, setPlayStatus] = useState(false)
    useEffect(()=>{
      setInterval(() => {
        setHeroCount((count)=>{return count === 2 ? 0 : count + 1})
      },5000);
    }, [])
  return (
    <div>
      <Background heroCount = {heroCount} playStatus = {playStatus}/>
      <NavBar />
      <Hero 
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
        data={data[heroCount]}
      />
    </div>
  )
}

export default App
