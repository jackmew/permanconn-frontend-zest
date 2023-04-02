import { useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  state: string;
}

export const useWelcome = () => {
  const userState = useState<User | null>(null);

  const getToken = () => {
    const params = {
      type: 'MERCHANT',
      email: 'markhuang1993@gmail.com',
      password: 'P@ssw0rd',
    };

    axios({
      method: 'post',
      url: '/portal-auth-service/api/v1/auth/get-token',
      data: params,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUser = async () => {};

  return {
    getToken,
    userState,
    getUser,
  };
};
