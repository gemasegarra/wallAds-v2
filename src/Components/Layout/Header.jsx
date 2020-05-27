import React from 'react';

import { HeaderBar, StyledLink, StyledNavLink } from '../StyledComponents/Layout';


function Header() {
  return (
    <HeaderBar>
      <StyledLink to="/adlist">WallAds!</StyledLink>
      <p>Buy and sell anything you want</p>
      <StyledNavLink to="/adlist" activeClassName="active">
        Ad List
      </StyledNavLink>
      <StyledNavLink to="/createad" activeClassName="active">
        Create ad
      </StyledNavLink>
    </HeaderBar>
  );
}


export default Header;
