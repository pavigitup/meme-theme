import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  color: #ffffff;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 20px;
  top: 0px;

  @media screen and (max-width: 1100px) {
    order: 2;
    width: 80%;
    left: 0px;
    justify-content: flex-start;
  }
`

export const GeneratorContainer = styled.div`
  width: 300px;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`

export const Headers = styled.h1`
  color: #111111;

  @media screen and (max-width: 1100px) {
    font-size: 20px;
    width: 200px;
  }
`

export const LabelContainer = styled.div`
  margin-bottom: 20px;
`

export const Label = styled.label`
  width: 100%;
  color: #121212;
  font-size: 15px;
  padding-bottom: 15px;
`

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 5px 10px;
  border-radius: 2px;
  margin-top: 10px;
  border: 1px solid #121212;
`

export const ImageContainer = styled.div`
  overflow: hidden;
  background-image: url(${props => props.bgImage});
  height: 378px;
  display: flex;
  position: relative;
  top: 200px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-repeat: no-repeat;
  width: 600px;
  background-size: contain;
  background-position: center;

  @media screen and (max-width: 1100px) {
    order: 1;
    position: relative;
    top: 5px;
    width: 90%;
  }
`

export const ImageHead = styled.p`
  color: #ffffff;
  font-size: ${props => props.size}px;
  font-weight: 600;
`

export const ImagePara = styled.p`
  color: #ffffff;
  font-size: ${props => props.size}px;
  font-weight: 600;
`
export const Select = styled.select`
  width: 100%;
  padding: 5px 5px;
  border-radius: 2px;
  border: 1px solid #121212;
`

export const Button = styled.button`
  background-color: #ff5656;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
`
