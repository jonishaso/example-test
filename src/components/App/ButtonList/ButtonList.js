import React, { useContext } from 'react'
import styled from 'styled-components'
import { ColorContext, colors } from '../ButtonThemeContext'

export const StyledBtn = styled.button`
  background-color: ${props => (props.themeColor ? props.themeColor : '#64b5f6')};
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
    background-color: ${props => props.themeColor || '#bbdefb'};
  }
`

const ButtonList = ({ btnValue, handleClick }) => {
  const { btnThemeColor, setBtnThemeColor } = useContext(ColorContext)

  return (
    <div id="button-list">
      {btnValue?.map((value, index) => (
        <StyledBtn key={index} onClick={() => handleClick(value)}>
          {value > 0 ? `+${value}` : value}
        </StyledBtn>
      ))}
      <StyledBtn
        data-testid="context-button"
        onClick={() =>
          btnThemeColor === colors.blue
            ? setBtnThemeColor(colors.red)
            : setBtnThemeColor(colors.blue)
        }
        themeColor={btnThemeColor}
      >
        Theme Button
      </StyledBtn>
    </div>
  )
}

export default ButtonList
