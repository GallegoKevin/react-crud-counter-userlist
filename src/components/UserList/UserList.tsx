import { users, User } from '../../domain/User';
import { UserComponent } from './User';

export const UserList = () => {
  return (
    <ul>
      {users.map((user: User) => (
        <UserComponent key={user.id} user={user} />
      ))}
    </ul>
  );
};
