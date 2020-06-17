import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import BarList from './components/BarList'
import ButtonList from './components/ButtonList'
import fetchData from '#helper/api'

const StyledContainer = Styled.div`
  width: 80vw;
  margin: 20px auto;
  min-width: 350px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`
const StyledActionContainer = Styled.div`
  width: 60%;
  display: flex;
  flex-flow: row wrap;
  margin: 10px auto;
`
const App = () => {
  const [details, setDetails] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(async () => {
    init()
  }, [])

  const init = async () => {
    const data = await fetchData()
    setDetails(data)
  }

  const handleBtnClick = v => {
    let newValue = details.bars[selectedIndex] + v
    if (newValue < 0) newValue = 0
    const copyOfBars = details.bars
    copyOfBars.splice(selectedIndex, 1, newValue)
    setDetails({ ...details, bars: copyOfBars })
  }
  const handleSelect = event => setSelectedIndex(event.target.value)

  if (!details) return <h2> Loading....</h2>

  const options = details.bars.map((_, index) => (
    <option key={index} value={index}>
      {'Bar ' + (index + 1)}
    </option>
  ))
  return (
    <StyledContainer>
      <h1>Progress Bars</h1>
      <BarList barsValues={details.bars.map(value => (value / details.limit) * 100)} />
      <StyledActionContainer>
        <ButtonList btnValue={details.buttons} handleClick={handleBtnClick} />
        <select onChange={handleSelect} value={selectedIndex}>
          {options}
        </select>
      </StyledActionContainer>
    </StyledContainer>
  )
}

export default App
