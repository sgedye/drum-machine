import React, { useState } from 'react'
import Drumkit from './Drumkit'
import Controls from './Controls'
import styled from 'styled-components'

import '../Style/App.css'

const Drums = styled.div`
  min-width: 300px;
  max-width: 800px;
  margin: auto;
  background: #222;
  color: #fff;
  box-shadow: inset 0px 0px 10px 2px green;
  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }
`
const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin: 0;
  text-shadow: 3px 2px 3px green;
`
const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background: #444;
  @media screen and (max-width: 425px) {
    min-height: calc(100vh - 80px);
  }
  box-shadow: inset 0px 0px 10px 2px green;

`

function App() {
  const [power, setPower] = useState(true)
  const handleClick = song => {
    if (power) {
      playSound(song.id)
      keyPressed(document.getElementById(song.title))
      displayName(song.title)
    } else {
      displayName("")
    }
  }
  const playSound = song => document.getElementById(song).play()
  const keyPressed = btn => {
    const myStyle = `
      transform: translate(1px, 1px);
      box-shadow: none;
    `
    btn.setAttribute('style', myStyle)
    setTimeout(() => btn.setAttribute('style', ''), 200)
  }
  const handlePower = powerOn => setPower(powerOn)
  const handleVolume = volume => {
    const songs = document.getElementsByClassName("clip")
    for (let i=0; i<songs.length; i++) {
      songs[i].volume = volume / 100
    }
  }
  const displayName = title => document.getElementById("display").innerHTML = title
  
  return (
    <Drums id="drum-machine">
      <Header id="header">Drum Kit</Header>
      <Body id="body">
        <Drumkit handleClick={handleClick} />
        <Controls power={power} handleChange={handlePower} handleVolume={handleVolume} />
      </Body>
    </Drums>
  )
}

export default App;
