import PropTypes from 'prop-types';
import { Text, Span } from './User.styled';
import Avatar from 'react-avatar';
import { Address } from '../Address';
import { useMedia } from 'react-use';

export const User = ({
  user: {
    name,
    email,
    address: { street, city, geo },
  },
}) => {
  const isBiz = email.endsWith('biz');
  const isTablet = useMedia('(min-width: 768px)')
  return (
    <>
      <Avatar name={name} size="40" round={true} />
      <Text>
        Name: <Span>{name}</Span>
      </Text>
      <Text>
        Mail: <Span isBiz={isBiz}>{email}</Span>
      </Text>
      {isTablet && <Address street={street} city={city} geo={geo} />}
      
    </>
  );
};
User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
