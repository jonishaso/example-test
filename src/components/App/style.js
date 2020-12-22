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
export { StyledContainer, StyledTitle, StyledActionContainer, StyledSelect }
