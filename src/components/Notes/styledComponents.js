import styled from 'styled-components'

export const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const HeadingEle = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
`

export const InputCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 70vw;
  height: 40vh;
  border: 1px solid transparent;
  box-shadow: 3px 3px 4px 4px #aab8c8;
`

export const TitleInputEle = styled.input`
  color: #1e293b;
  border: none;
  border-radius: none;
  outline: none;
  margin-left: 5vw;
  font-weight: bold;
`

export const DescriptionEle = styled.input`
  color: #1e293b;
  border: none;
  border-radius: none;
  outline: none;
  margin-left: 5vw;
  margin-bottom: 10vh;
`

export const ButtonEle = styled.button`
  color: #ffffff;
  background-color: #475569;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  width: 9vw;
  height: 5vh;
  margin-left: 50vw;
`
