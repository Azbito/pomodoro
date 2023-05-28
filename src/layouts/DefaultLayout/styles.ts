import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: 100vh;
  margin: 5rem auto;
  padding: 4rem;
  background-color: ${props => props.theme['gray-800']};

  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
