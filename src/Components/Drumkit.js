import React from 'react'
import styled from 'styled-components'
import Mousetrap from 'mousetrap'

const Drums = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  grid-gap: 10px;
  padding: 20px;
`

const Button = styled.button`
  display: inline-block;
  background-image: radial-gradient(red, darkblue);
  padding: 20px;
  font-weight: bold;
  font-size: 1.5em;
  border-radius: 10px;
  box-shadow: 3px 4px 4px 0px #111;
  &:active {
    transform: translate(1px, 1px);
  }
`

const DRUM_KEYS = [
  { id: "Q", title: "Heater-1", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { id: "W", title: "Heater-2", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { id: "E", title: "Heater-3", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  { id: "A", title: "Heater-4", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  { id: "S", title: "Clap", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { id: "D", title: "Hat-Open", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { id: "Z", title: "Kick+Hat", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  { id: "X", title: "Kick-2", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { id: "C", title: "Hat-Closed", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
]

function Drumkit(props) {
  const buttons = DRUM_KEYS.map(key => {
    const lowerCaseId = key.id.toLowerCase()
    Mousetrap.bind(lowerCaseId, () => { props.handleClick(key) })
    return (
      <Button
        key = {key.id}
        id = {key.title}
        className="drum-pad"
        onClick={() => props.handleClick(key)}
      >
        {key.id}
        <audio id={key.id} className="clip" src={key.src} />
      </Button>
    )
  })
  return (
    <Drums id="drum-kit">
      {buttons}
    </Drums>
  )
}

export default Drumkit