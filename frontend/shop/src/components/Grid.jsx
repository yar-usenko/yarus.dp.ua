import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1.5rem;
`

const Cell = styled.div`
  min-width: 0;
  grid-column: span ${props => props.column || 1};
`

Grid.Cell = Cell;


export default Grid;
