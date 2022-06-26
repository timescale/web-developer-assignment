import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #fdb515;
  border: 2px solid #fdb515;
  box-sizing: border-box;
  color: #141e35;
  cursor: pointer;
  display: flex;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  justify-content: center;
  letter-spacing: -.01em;
  line-height: 24px;
  margin-bottom: 0;
  outline: none;
  padding: 4px 16px;
  text-align: center;
  text-decoration: none;
  transition: all .3s ease-out;
  white-space: nowrap;
  width: 100%;

  /*
  :disabled {
    background-color: #FEDA8A;
  }
  */
`

const Button = ({ 
  disabled,
  name,
  onClick,
  type
}) => {

  return (
    <StyledButton
      //disabled={disabled}
      name={name}
      onClick={onClick}
      type={type}
    >
      Sign up
    </StyledButton>
  )
}

export default Button