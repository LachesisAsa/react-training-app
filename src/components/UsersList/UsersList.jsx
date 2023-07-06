import { User } from 'components/User/User';
import PropTypes from 'prop-types';
// import { } from './UsersList.styled';

export const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
};
UsersList.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
