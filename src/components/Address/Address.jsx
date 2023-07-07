import { AddressText, AddressSpan } from './Address.styled';
export const Address = ({ street, city, geo: { lat, lng } }) => {
  return (
    <>
      <AddressText>
        City: <AddressSpan>{city}</AddressSpan>
      </AddressText>
      <AddressText>
        Srtreet: <AddressSpan>{street}</AddressSpan>
      </AddressText>
      <AddressText>
        Geo-Latitude: <AddressSpan>{lat}</AddressSpan>
      </AddressText>
      <AddressText>
        Geo-longitude: <AddressSpan>{lng}</AddressSpan>
      </AddressText>
    </>
  );
};