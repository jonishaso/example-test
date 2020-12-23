import styled from 'styled-components'

const StyledBar = styled.div`
  background-color: #e0e0e0;
  border-radius: 8px;
  border: 1px solid ${props => (props.isSelected ? '#ff3d00' : '#e0e0e0')};
  height: 30px;
  margin: 15px auto;
  padding: 2px;
  position: relative;
  width: 100%;
`
const StyledSpan = styled.span`
  background-color: ${props => (props.progress >= 100 ? '#ff3d00' : '#64b5f6')};
  border-radius: 4px;
  display: block;
  height: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: ${props => (props.progress >= 100 ? '100%' : props.progress + '%')};
  &:after {
    bottom: 0;
    content: '';
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }
`

const StyledText = styled.p`
  bottom: 7px;
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  margin: 0;
  position: absolute;
  right: 50%;
  z-index: 2;
`
export { StyledText, StyledSpan, StyledBar }
