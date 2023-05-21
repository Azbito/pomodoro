import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucess'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  sucess: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  margin: 0.5rem;
  width: 4.5rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: none;

  color: ${(props) => props.theme.white};

  background-color: ${(props) => props.theme['green-500']};

  /* ${(props) => `background-color: ${buttonVariants[props.variant]}`} */
`
