import { users } from 'data/user';
import { User } from './User/User';
import { UsersList } from './UsersList/UsersList';
import { Section } from './Section/Section';
export const App = () => {
  return (
    <>
      <Section>
        <User user={users[0]} />
      </Section>
      <Section title="List of users">
        <UsersList users={users} />
      </Section>
    </>
  );
};
