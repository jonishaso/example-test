import React from 'react'
import Styled from 'styled-components'

const StyledBar = Styled.div`
  width: 80%;
  height: 30px;
  position: relative;
  background-color: #e0e0e0;
  margin: 15px auto;
  padding: 0;
  border-radius: 8px;
`
const StyledSpan = Styled.span`
display: block;
height: 100%;
width: ${props => (props.progress >= 100 ? '100%' : props.progress + '%')};
background-color: ${props => (props.progress >= 100 ? '#ff3d00' : '#5393ff')};
position: relative;
text-align: center;
overflow: hidden;
border-radius: 8px;
&:after{
  content: "";
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: 1;
  overflow: hidden;
}
`

const StyledText = Styled.p`
  position: absolute;
  z-index: 3;
  top: -12px;
  right: 40%;
`
const BarItem = ({ progress }) => {
  return (
    <li>
      <StyledBar>
        <StyledText>{progress + '%'}</StyledText>
        <StyledSpan progress={progress} />
      </StyledBar>
    </li>
  )
}

export default BarItem
