import BarList from './BarList'
import ButtonList from './ButtonList'
import fetchData from '#helper/api'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
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
  // const [details, setDetails] = useState(null)
  const [bars, setBars] = useState(null)
  const [btnVals, setBtnVals] = useState(null)
  const [limit, setLimit] = useState(NaN)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    fetchData()
      .then(data => {
        const { bars, buttons, limit } = data
        console.log(bars)
        setBtnVals(buttons)
        setBars(bars)
        setLimit(limit)
      })
      .catch(err => console.log(err))
  }, [])

  const handleBtnClick = useCallback(btnValue => {
    let newValue = bars[selectedIndex] + btnValue
    if (newValue < 0) newValue = 0
    const copyOfBars = [...bars]
    copyOfBars.splice(selectedIndex, 1, newValue)
    setBars(copyOfBars)
  })
  const handleSelect = useCallback(event =>
    setSelectedIndex(event.target.value),
  )

  const options = useMemo(
    () => (!bars ? [] : bars.map((_, index) => `Bar ${index + 1}`)),
    [bars],
  )
  if (!bars)
    return (
      <StyledContainer>
        <StyledTitle>Loading....</StyledTitle>
      </StyledContainer>
    )

  return (
    <StyledContainer>
      <StyledTitle>Progress Bars</StyledTitle>
      <BarList
        barsValues={bars.map(value =>
          Number.parseFloat((value / limit) * 100).toFixed(2),
        )}
        selectedIndex={selectedIndex}
      />
      <StyledActionContainer>
        <StyledSelect onChange={handleSelect} value={selectedIndex}>
          {options.map((value, index) => {
            return (
              <option key={index} value={index}>
                {value}
              </option>
            )
          })}
        </StyledSelect>
        <ButtonList btnValue={btnVals} handleClick={handleBtnClick} />
      </StyledActionContainer>
    </StyledContainer>
  )
}

export default App
