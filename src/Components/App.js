import React, { useState } from 'react'
import Drumkit from './Drumkit'
import Controls from './Controls'
import styled from 'styled-components'

import '../Style/App.css'

const Drums = styled.div`
  min-width: 300px;
  max-width: 800px;
  margin: auto;
  background: pink;
`
const Header = styled.h1`
  text-align: center;
  margin: 0;
`
const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background: gray;
`

function App() {
  const [soundId, setSoundId] = useState("")

  function handleClick(newSoundId) {
    setSoundId(newSoundId)    
    playSound(newSoundId)
  }

  function playSound(newSoundId) {
    document.getElementById(newSoundId).play()
  }
  
  return (
    <Drums id="drum-machine">
      <Header id="header">DrumKit</Header>
      <Body id="body">
        <Drumkit handleClick={handleClick}/>
        <Controls />
      </Body>
    </Drums>
  )
}

export default App;
