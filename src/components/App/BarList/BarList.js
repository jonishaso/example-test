import BarItem from './BarItem'

import React from 'react'
import Styled from 'styled-components'

const StyledList = Styled.ul`
  list-style: none;
  margin: 20px auto;
  padding-inline-start: 0;
  width: 80%;
`

const BarList = ({ barsValues, selectedIndex }) => {
  const barItems = barsValues.map((value, index) => (
    <BarItem isSelected={Number(selectedIndex) === index} key={index} progress={value} />
  ))
  return <StyledList>{barItems}</StyledList>
}

export default BarList
