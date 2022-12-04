import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;

`;

export const Link = styled(NavLink)`
  display: block;
  padding: 5px 10px;
  margin-right: 20px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  transition: color 300ms linear;
  position: relative;
  &:hover:not(.active) {
    color: #ff9000;
  }
  &.active::after {
    box-sizing: inherit;
    content: ' ';
    display: flex;
    transition: background-color 250ms linear;
    position: absolute;
    left: 0;
    bottom: -7px;
    width: 100%;
    height: 3px;
    border-radius: 2px;
    background-color: #26b9ff;
  }
`;
