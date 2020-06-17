import React from 'react'
import styled from 'styled-components'

const StyledBtn = styled.button`
  background-color: #64b5f6;
  border: 0;
  border-radius: 4px;
  color: #424242;
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
  margin: 0 5px;
  padding: 7px 14px;
  width: 80px;
  text-align: center;
  &:hover {
    background-color: #bbdefb;
  }
`
const ButtonList = ({ btnValue, handleClick }) => {
  const items = btnValue.map((value, index) => (
    <StyledBtn key={index} onClick={() => handleClick(value)}>
      {value > 0 ? `+${value}` : value}
    </StyledBtn>
  ))
  return <div>{items}</div>
}

export default ButtonList
