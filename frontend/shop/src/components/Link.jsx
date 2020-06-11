import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const Link = styled(RouterLink)`
  color: #06c;
  cursor: pointer;
  text-decoration: none;
  transition: color .15s ease-out;
  -webkit-tap-highlight-color: rgba(0,0,0,.1);

  &:hover {
    color: #c04;
  }
`

export default Link;
