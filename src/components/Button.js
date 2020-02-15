import React from "react"
import styled from "styled-components"

const Button = ({ children, dark }) => {
  return <StyledButton dark={dark}>{children}</StyledButton>
}

const StyledButton = styled.button`
  height: 40px;
  min-width: 200px;
  font-weight: 300;
  font-size: 16px;
  padding: 5px 20px;
  border: none;
  box-shadow: -2px 4px 6px 0px rgb(184, 184, 184);
  cursor: pointer;

  ${({ dark }) =>
    dark
      ? `
    color: white;
    background: #000;
  `
      : `
    border: 1px solid #dbdbdb;
    background: white;
    color: #000;    
  `}
`

export default Button
