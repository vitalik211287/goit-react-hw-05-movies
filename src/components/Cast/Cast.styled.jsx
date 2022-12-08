import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px 0;
  color: #26b9ff;
`;

export const CastItem = styled.li`
  width: calc((100% - 9 * 12px) / 10);
`;

export const Img = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  margin-bottom: 8px;
`;

export const Name = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #26b9ff;
`;

export const Character = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #26b9ff;
`;
