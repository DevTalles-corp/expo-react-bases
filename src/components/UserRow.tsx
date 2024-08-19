import { User } from '../interfaces/reqres.response';

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  return (
    <tr>
      <td>
        <img
          src={user.avatar}
          className="rounded-full w-14 p-2"
          alt="User Avatar "
        />
      </td>
      <td>
        {user.first_name} {user.last_name}
      </td>
      <td>{user.email}</td>
    </tr>
  );
};
