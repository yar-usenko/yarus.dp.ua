import styled from 'styled-components'

const Icon = styled.span`
  display: inline-block;
  width: ${props => props.width || '1em'};
  height: ${props => props.height || props.width || '1em'};
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
`

export default Icon;
