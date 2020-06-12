import styled from 'styled-components'

const Heading = styled.h1`
  font-size: ${props => ['2.375rem', '1.75rem', '1.3125rem', '1rem', '1rem'][(props.level || 3) - 1]};
  line-height: ${props => ['1.26315789', '1.71428571', '1.14285714', '1.5', '1.5'][(props.level || 3) - 1]};

  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
`

export default Heading;
