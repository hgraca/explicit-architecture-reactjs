import React from 'react';
import {
  Branding,
  BrandingLink,
  Container,
  Header,
  NavBar,
  NavBarCollapse,
  NavBarList,
  NavBarListItem,
  NavBarListItemIcon,
  NavBarListItemLink
} from './index.styled';
import HomeIcon from '../../Atom/HomeIcon';
import SearchIcon from '../../Atom/SearchIcon';

const HeaderComponent = () => (
  <Header>
    <NavBar>
      <Container>
        <Branding>
          <BrandingLink to={ `/` }>Gist Explorer</BrandingLink>
        </Branding>
      </Container>
      <NavBarCollapse>
        <NavBarList>
          <NavBarListItem>
            <NavBarListItemLink to={ `/` }>
              <NavBarListItemIcon><HomeIcon/></NavBarListItemIcon>
              Homepage
            </NavBarListItemLink>
          </NavBarListItem>
          <NavBarListItem>
            <NavBarListItemLink to={ `/` }>
              <NavBarListItemIcon><SearchIcon/></NavBarListItemIcon>
              Search
            </NavBarListItemLink>
          </NavBarListItem>
        </NavBarList>
      </NavBarCollapse>
    </NavBar>
  </Header>
)


export default HeaderComponent;
