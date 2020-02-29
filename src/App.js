import React from 'react'
import Drumkit from './Components/Drumkit'
import Controls from './Components/Controls'
import styled from 'styled-components'

import './App.css'

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
  return (
    <Drums id="drum-machine">
      <Header id="header">DrumKit</Header>
      <Body id="body">
        <Drumkit />
        <Controls />
      </Body>
    </Drums>
  );
}

export default App;
