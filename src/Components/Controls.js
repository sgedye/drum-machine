import React from 'react'
import styled from 'styled-components'

const Selectors = styled.div`
  display: block;
  text-align: center;
  padding: 10px;
`

const RadioSelector = styled.div`
	display: flex;
`
const RadioInput = styled.input`
	position: absolute;
	-webkit-clip: rect(0, 0, 0, 0);
	-moz-clip: rect(0, 0, 0, 0);
	-ms-clip: rect(0, 0, 0, 0);
	-o-clip: rect(0, 0, 0, 0);
	clip: rect(0, 0, 0, 0);
  
  &:checked + label { 
    background-color: green;
    .check { left: 68px; }
  }
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
  &:hover { cursor: pointer; }

`

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
`

const Selection = styled.div`
  width: 2.5em;
  height: 0.8em;
  background-color: ${props => props.checked ? 'yellow' : 'red'};
`

function Controls() {
  return (
    <Selectors id="controls">
      {/* <Label for="power">
        <input id="power" type="checkbox" checked />
        <span className="slider round"></span>
      </Label>
      <RadioSelector>
        <RadioInput type="radio" id="power" name="selector" value="a" checked/>
        <RadioLabel for="power">
          <Selection className="check"></Selection>
        </RadioLabel>
      </RadioSelector>
      <div>
        <input id="display" type="text" />
      </div>
      <div>
        <input type="range" id="volume" name="volume" min="0" max="100" />
      </div>
      <div>
        <label for="volume">Volume Slider</label>
      </div>
      <RadioSelector>
        <RadioInput type="radio" id="temp1" name="temp" value="a" checked/>
        <RadioLabel for="temp1">TEMP1</RadioLabel>
        <RadioInput type="radio" id="temp2" name="temp" value="b" />
        <RadioLabel for="temp2">TEMP2</RadioLabel>
      </RadioSelector>
      <br />
      <RadioSelector>
        <RadioInput type="radio" id="bank1" name="bank" value="a" checked/>
        <RadioLabel for="bank1">Bank1</RadioLabel>
        <RadioInput type="radio" id="bank2" name="bank" value="b" />
        <RadioLabel for="bank2">Bank2</RadioLabel>
      </RadioSelector> */}
    </Selectors>
  )
}

export default Controls
