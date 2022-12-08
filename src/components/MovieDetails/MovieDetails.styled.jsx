import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import { CgArrowLeftR } from 'react-icons/cg';

export const DetailWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 16px 0;
  border-bottom: 2px solid #26b9ff;
  color: #26b9ff;
`;

export const Label = styled.span`
  font-weight: 700;
  display: block;
  margin-bottom: 8px;
  color: red;
`;

export const ScoreLabel = styled.span`
  font-weight: 700;
`;

export const IconArrowLeft = styled(CgArrowLeftR)`
  font-size: 20px;
  margin-right: 6px;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  transition: color 200ms linear;
  &:hover {
    color: #ff9000;
  }
`;

export const Thumb = styled.div`
  width: 300px;
  flex-shrink: 0;
`;
// export const Text = styled.p`
//  color: white;
// `;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 26px;

`;

export const LinkList = styled.ul`
  display: flex;
  padding: 16px 0;
  gap: 16px;

`;
export const Text = styled.h2`
  padding: 8px;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  border-bottom: 2px solid #26b9ff;
`;
export const StyledLink = styled(NavLink)`
  display: block;
  padding: 4px 8px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  color: #000000;
  transition: color 300ms linear;
  color: white;
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

// export const FavouriteBtn = styled.button`
//   display: flex;
//   padding: 10px 20px;
//   justify-content: center;
//   align-items: center;
//   border: none;
//   border: 2px solid #ccc;
//   border-radius: 5px;
//   background-color: #fff;
//   color: #006dba;
//   font-size: 14px;
//   font-weight: 500;
//   text-transform: uppercase;
//   cursor: pointer;
//   transition: 200ms linear;
//   &.active {
//     background-color: red;
//     border-color: red;
//     color: #fff;
//   }
//   &:hover {
//     background-color: #006dba;
//     border-color: #006dba;
//     color: #fff;
//   }
// `;
