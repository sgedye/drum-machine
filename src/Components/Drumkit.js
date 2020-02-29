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

function Drumkit() {
  return (
    <Drums id="drum-kit">
      <Button>Q</Button>
      <Button>W</Button>
      <Button>E</Button>
      <Button>A</Button>
      <Button>S</Button>
      <Button>D</Button>
      <Button>Z</Button>
      <Button>X</Button>
      <Button>C</Button>
    </Drums>
  )
}

export default Drumkit
