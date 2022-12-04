import styled from '@emotion/styled';

export const Movies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
export const Li = styled.li`
  margin-top: 20px;
  margin-bottom: 20px;
  width: calc((100% - 4 * 16px) / 5);
  -webkit-box-shadow: 0px 0px 8px 1px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 0px 8px 1px rgba(204, 204, 204, 1);
  box-shadow: 0px 0px 8px 1px #26b9ff;
  //   padding: 3px;
`;
export const P = styled.p`
  color: white;
  font-size: 20px;
  padding: 12px 10px;
`;
export const Img = styled.img`
  width: 100%;
  height: 330px;
  //   object-fit: cover;
`;
