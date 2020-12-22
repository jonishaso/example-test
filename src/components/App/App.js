import BarList from './BarList'
import ButtonList from './ButtonList'
import useFetchFData from './helper/useFetchData'

import React, { useState, useCallback, useMemo } from 'react'
import {
  StyledContainer,
  StyledTitle,
  StyledActionContainer,
  StyledSelect,
} from './style'

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
