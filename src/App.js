import React from 'react'
import Header from './Components/Header'
import Drumkit from './Components/Drumkit'
import Controls from './Components/Controls'
import styled from 'styled-components'

import './App.css'

const Body = styled.div`
  background: gray;
`

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <Drumkit />
        <Controls />
      </Body>
    </div>
  );
}

export default App;
