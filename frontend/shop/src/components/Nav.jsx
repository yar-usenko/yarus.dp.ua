import React from 'react';
import styled from 'styled-components';
import LinkBase from '../components/Link.jsx'

const Root = styled.nav`
  display: block;
`;

const List = styled.ul`
  display: flex;
  padding-left: -.25rem;
  padding-right: -.25rem;
`;


const RootItem = styled.li`
  display: block;
`;

const Link = styled(LinkBase)`
  display: block;
  color: inherit;
  font: inherit;
  line-height: inherit;
  padding: 0 .25rem;
`

const NavItem = ({ children, to, ...props }) => (
  <RootItem {...props}>
    <Link to={to}>
      {children}
    </Link>
  </RootItem>
)

const Nav = ({ children, ...props }) => (
  <Root {...props}>
    <List>
      {children}
    </List>
  </Root>
)

Nav.Item = NavItem;

export default Nav;
