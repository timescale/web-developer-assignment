import React, { memo } from "react";
import styled from "styled-components";

const FormGroup = styled.div`
  //height: 105px;
  margin-bottom: 16px;
  position: relative;
`;

const Label = styled.label`
  align-items: center;
  color: #141E35;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 24px;
`;

const Input = styled.input`
  margin-bottom: 8px;
  padding: 16px 12px;
  width: -webkit-fill-available;
  //width: 100%;

  :error {
    border-color: #F54545;
  }
`;

const Error = styled.p`
  align-items: center;
  color: #F54545;
  display: flex;
  font-family: JetBrains Mono;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 20px;
  margin: 0 0;
`;


const InputField = ({ 
    error,
    id,
    label,
    onChange,
    placeholder,
    required,
    type,
    value,
  }) => {

  //const [input, setInput] = useState();

  return (
    <FormGroup>
      <Label>
        {label}
      </Label>
      <Input
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
      {error && <Error>{error}</Error>}
    </FormGroup>
  );
};

export default InputField;


/*
import React, { useState } from "react";
import styled from 'styled-components';

const Label = styled.label`
  align-items: center;
  color: #141E35;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 24px;
`

const Input = styled.input`
  margin-bottom: 8px;
  padding: 16px 12px;
  width: 100%;
  
  /*
  &[type="email"] {
    background-color: yellow;
    margin-bottom: 16px;
  }
`;

const Error = styled.p`
  align-items: center;
  color: #F54545;
  display: flex;
  font-family: 'JetBrains Mono';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 20px;
`

const InputField = ({ value, label, name, placeholder, type, onChange, error }) => {
  const [input, setInput] = useState();

  return (
    <div className="form-group">
      {label && <Label htmlFor="input-field">{label}</Label>}
      <Input
        className="form-control"
        name={name}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        type={type}
        value={input}
      />
      {/*error && <Error htmlFor="input-field">{error}</Error>}
    </div>
  )
};

export default InputField;
*/