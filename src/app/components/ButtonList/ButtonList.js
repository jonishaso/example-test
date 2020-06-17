import React from 'react'
import styled from 'styled-components'

const StyledBtn = styled.button`
  background-color: #6772e5;
  color: #fff;
  width: 40px;
  margin: 0 5px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
`
const ButtonList = ({ btnValue, handleClick }) => {
  const items = btnValue.map((value, index) => (
    <StyledBtn key={index} onClick={() => handleClick(value)}>
      {value}
    </StyledBtn>
  ))
  return <div>{items}</div>
}

export default ButtonList
