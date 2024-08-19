import { useUsers } from '../hooks/useUsers';
import { UserRow } from './UserRow';

export const UsersPage = () => {
  const { users } = useUsers();

  return (
    <>
      <table className="w-[500px] bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <UserRow />
        </tbody>
      </table>

      <div className="flex justify-between w-[500px] mt-2">
        <button className="p-2 bg-blue-500 text-white rounded-[5px]">
          Anteriores
        </button>
        <button className="p-2 bg-blue-500 text-white rounded-[5px]">
          Siguientes
        </button>
      </div>
    </>
  );
};
