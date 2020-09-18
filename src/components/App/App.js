import BarList from './BarList'
import ButtonList from './ButtonList'
import useFetchFData from './helper/useFetchData'

import React, { useState, useCallback, useMemo } from 'react'
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
  const [
    barsValues,
    buttonsValues,
    loading,
    limitValue,
    setBarsValues,
  ] = useFetchFData(null)

  const [selectedIndex, setSelectedIndex] = useState(0)

  const optionsTags = useMemo(
    () =>
      !barsValues ? (
        <div />
      ) : (
        barsValues.map((_, index) => {
          return (
            <option key={index} value={index}>
              {`Bar ${index + 1}`}
            </option>
          )
        })
      ),
    [barsValues],
  )
  const calculatedBars = useMemo(
    () =>
      !barsValues
        ? []
        : barsValues.map(value =>
            Number.parseFloat((value / limitValue) * 100).toFixed(2),
          ),
    [barsValues],
  )

  const handleBtnClick = useCallback(btnValue => {
    let newValue = barsValues[selectedIndex] + btnValue
    if (newValue < 0) newValue = 0
    const copyOfBars = [...barsValues]
    copyOfBars.splice(selectedIndex, 1, newValue)
    setBarsValues(copyOfBars)
  })

  const handleSelect = useCallback(event =>
    setSelectedIndex(event.target.value),
  )

  if (loading)
    return (
      <StyledContainer>
        <StyledTitle>Loading....</StyledTitle>
      </StyledContainer>
    )

  return (
    <StyledContainer>
      <StyledTitle>Progress Bars</StyledTitle>
      <BarList barsValues={calculatedBars} selectedIndex={selectedIndex} />
      <StyledActionContainer>
        <StyledSelect onChange={handleSelect} value={selectedIndex}>
          {optionsTags}
        </StyledSelect>
        <ButtonList btnValue={buttonsValues} handleClick={handleBtnClick} />
      </StyledActionContainer>
    </StyledContainer>
  )
}

export default App
