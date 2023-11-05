import styled from 'styled-components';

export const InputsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FormInput = styled.input`
  max-width: 200px;
  margin-bottom: 10px;
  padding: 5px;
`;

export const SubmitButton = styled.button`
  max-width: 208px;

  color: #fff;

  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: DeepSkyBlue;

  transform: scale(1);
  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.2);
    transition: transform 250ms ease-in-out;
  }
`;
