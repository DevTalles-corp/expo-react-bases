import axios from 'axios';
import { UserListResponse } from '../interfaces/reqres.response';

export const loadUsersAction = async (page: number) => {
  try {
    const { data } = await axios.get<UserListResponse>(
      `https://reqres.in/api/users`,
      {
        params: {
          page: page,
        },
      }
    );

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
