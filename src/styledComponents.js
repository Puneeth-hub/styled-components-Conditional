import styled from 'styled-components'

export const Heading = styled.h1`
  color: green;
  font-family: 'Roboto';
  font-size: 75px;
  font-weight: 500;
`

export const CustomButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => (props.outline ? '#0070c1' : '#ffffff')};
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => (props.outline ? '#ffffff' : '#0070c1')};
`
