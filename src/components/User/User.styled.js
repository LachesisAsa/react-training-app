import styled from 'styled-components';

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #212121;
  background-color: yellow;
  &:hover,
  &:focus {
    background-color: blueviolet;
  }
`;

export const Span = styled.span`
  font-weight: 700;
  color: ${({ isBiz }) => (isBiz ? 'red' : 'blue')};
  &:hover {
    color: wheat;
  }
  ${Text}:hover &{
    background-color: brown;
  }
`;
