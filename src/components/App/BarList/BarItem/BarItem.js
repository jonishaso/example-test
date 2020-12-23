import React from 'react'
import { StyledText, StyledSpan, StyledBar } from './style'
const BarItem = ({ isSelected, progress }) => {
  return (
    <li>
      <StyledBar isSelected={isSelected}>
        <StyledText>{progress + '%'}</StyledText>
        <StyledSpan progress={progress} />
      </StyledBar>
    </li>
  )
}

export default BarItem
