import styled from 'styled-components';

export const AddressText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #212121;
  background-color: yellow;
  &:hover,
  &:focus {
    background-color: blueviolet;
  }
`;

export const AddressSpan = styled.span`
  font-weight: 700;
  &:hover {
    color: wheat;
  }
  ${AddressText}:hover &{
    background-color: green;
  }
`;