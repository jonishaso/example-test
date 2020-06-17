import BarList from './BarList'
import ButtonList from './ButtonList'
import fetchData from '#helper/api'

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 20px auto;
  min-width: 350px;
  width: 80vw;
`
const StyledTitle = styled.h2`
  color: #424242;
  font-family: 'Sriracha', cursive;
  font-size: 40px;
`
const StyledActionContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 10px auto;
  width: 60%;
`

const StyledSelect = styled.select`
  border: 1px solid #424242;
  border-radius: 4px;
  box-sizing: border-box;
  color: #424242;
  display: block;
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
  margin: 0 5px;
  padding: 0.3em 0.8em;
  width: 120px;
`
const App = () => {
  const [details, setDetails] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const data = await fetchData()
    setDetails(data)
  }

  const handleBtnClick = btnValue => {
    let newValue = details.bars[selectedIndex] + btnValue
    if (newValue < 0) newValue = 0
    const copyOfBars = [...details.bars]
    copyOfBars.splice(selectedIndex, 1, newValue)
    setDetails({ ...details, bars: copyOfBars })
  }
  const handleSelect = event => setSelectedIndex(event.target.value)

  if (!details)
    return (
      <StyledContainer>
        <StyledTitle>Loading....</StyledTitle>
      </StyledContainer>
    )

  const options = details.bars.map((_, index) => (
    <option key={index} value={index}>
      {'Bar ' + (index + 1)}
    </option>
  ))
  return (
    <StyledContainer>
      <StyledTitle>Progress Bars</StyledTitle>
      <BarList
        barsValues={details.bars.map(value =>
          Number.parseFloat((value / details.limit) * 100).toFixed(2)
        )}
        selectedIndex={selectedIndex}
      />
      <StyledActionContainer>
        <StyledSelect onChange={handleSelect} value={selectedIndex}>
          {options}
        </StyledSelect>
        <ButtonList btnValue={details.buttons} handleClick={handleBtnClick} />
      </StyledActionContainer>
    </StyledContainer>
  )
}

export default App
