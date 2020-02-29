import React from 'react'
import styled from 'styled-components'

const Selectors = styled.div`
  display: block;
  text-align: center;
`

const RadioSelector = styled.div`
	display: flex;
`
const RadioInput = styled.input`
	position: absolute !important;
	-webkit-clip: rect(0, 0, 0, 0);
	-moz-clip: rect(0, 0, 0, 0);
	-ms-clip: rect(0, 0, 0, 0);
	-o-clip: rect(0, 0, 0, 0);
	clip: rect(0, 0, 0, 0);
`

const RadioLabel = styled.label`
	background-color: #111;
  color: #fff;
  width: 5em;
  height: 1em;
  border-radius: 20px;
  font-weight: bold;
	padding: 10px 20px;
	transition: all 0.3s ease-in-out;
`

const Selection = styled.div`
  width: 2.5em;
  height: 0.8em;
  background-color: ${props => props.checked ? 'yellow' : 'red'};
`

/*   CAN USE SCSS PSUDO ELEMENTS WITH STYLED COMPONENTS :D


.radio-selector {
	label:hover { cursor: pointer; }
	input:checked + label { background-color: green; }
}
*/

function Controls() {
  return (
    <Selectors id="controls">
      <RadioSelector>
        <RadioInput type="radio" id="power" name="selector" value="a" checked/>
        <RadioLabel for="power">
          <Selection></Selection>
        </RadioLabel>
      </RadioSelector>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="range" id="volume" name="volume" min="0" max="100" />
      </div>
      <div>
        <label for="volume">Volume Slider</label>
      </div>
      <RadioSelector>
        <RadioInput type="radio" id="bank1" name="bank" value="a" checked/>
        <RadioLabel for="bank1">Bank1</RadioLabel>
        <RadioInput type="radio" id="bank2" name="bank" value="b" />
        <RadioLabel for="bank2">Bank2</RadioLabel>
      </RadioSelector>
    </Selectors>
  )
}

export default Controls
