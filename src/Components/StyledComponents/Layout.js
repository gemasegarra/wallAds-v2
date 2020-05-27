import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;  
  width: 100%;
  height: 80px;
  top: 0;
  z-index: 10;
  background: #e9e9e9;

  p {
    margin-right: 6rem;
    font-size: 1.5rem;
    color: black;
    @media (max-width: 940px) {
      display: none;
    }
  }
`;

export const StyledLink = styled(Link)`
    margin-right: auto;
    margin-left: 6rem;
    font-size: 2.5rem;
    text-decoration: none;
    color: #db7093;
    @media (max-width: 425px) {
      margin-left: 1rem;
      font-size: 2rem;
    }
`;

export const StyledNavLink = styled(NavLink)`
  color: #db7093;
  font-weight: 300;
  margin: 0 2rem;
  text-decoration: none;
  transition: all 0.2s linear;
  &:hover {
    color: #9b4f68;
  }
  &.active {
    color: #8e3b56;
    border-bottom: 1px solid #8e3b56;
  }
  @media (max-width: 425px) {
      font-size: 12px;
      margin: 0 1rem;
    }
`;

export const FooterBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;  
  bottom: 0;
  width: 100%;
  height: 85px;
  background: #F6F6F6;
  font-size: 0.8rem;
  a {
    color: #db7093;
    text-decoration: none;
  }
  & a:visited {
    color: #db7093;
  }
`;
