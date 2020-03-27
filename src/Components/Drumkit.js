import React from 'react'
import styled from 'styled-components'

const Drums = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  grid-gap: 10px;
  padding: 10px;
`

const Button = styled.button`
  display: inline-block;
  background: pink;
  padding: 20px;
`

const DRUM_KEYS = [
  { id: "Q", name: "Heater-1", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { id: "W", name: "Heater-2", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { id: "E", name: "Heater-3", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  { id: "A", name: "Heater-4", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  { id: "S", name: "Clap", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { id: "D", name: "Hat-Open", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { id: "Z", name: "Kick+Hat", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  { id: "X", name: "Kick-2", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { id: "C", name: "Hat-Closed", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
]

function Drumkit(props) {
  return (
    <Drums id="drum-kit">
      {DRUM_KEYS.map(key => {
        return (
          <Button
            key = {key.id}
            className="drum-pad"
            onClick={() => props.handleClick(key.id)}
          >
            {key.id}
            <audio id={key.id} src={key.src} />
          </Button>
        )
      })}
    </Drums>
  )
}

export default Drumkit
