import React from 'react'
import Styled from 'styled-components'
import BarItem from './BarItem'

const StyledList = Styled.ul`
  list-style: none;
  width: 80%;
  margin: 20px auto;
  padding-inline-start: 0;
`

const BarList = ({ barsValues }) => {
  const barItems = barsValues.map((value, index) => <BarItem key={index} progress={value} />)
  return <StyledList>{barItems}</StyledList>
}

export default BarList
