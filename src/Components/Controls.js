import React from 'react'
import styled from 'styled-components'

const Selectors = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 20px;
  justify-content: center;
`
const Label = styled.label`
  top: 10px;
  width: 100px;
  margin: 0 auto;
  span { margin: 0 22px; }
  p { 
    text-align: center;
    text-shadow: 1px 1px #111
  }
`
const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #888;
  font-family: Futura;
  font-size: 2em;
  width: 250px;
  height: 60px;
  padding: 3px;
  margin: auto;
  border-radius: 20px;
  box-shadow: inset 0px 0px 5px 2px #111;
  text-shadow: 2px 2px 4px black;
`
const Volume = styled.input`
  height: 50px;
  width: 200px;
  margin: 0 auto;  
`

function Controls(props) {
  return (
    <Selectors id="controls">
      <Label className="switch">
        <input id="power" type="checkbox" checked={props.power} onChange={(e) => props.handleChange(e.target.checked)} /> 
        <span className="slider round"></span>
        {props.power ? <p>POWER ON</p> : <p>POWER OFF</p>}
      </Label>
      <Display id="display" />
      <Volume type="range" id="volume" name="volume" min="0" max="100" onChange={(e) => props.handleVolume(e.target.value)} />   
    </Selectors>
  )
}

export default Controls
