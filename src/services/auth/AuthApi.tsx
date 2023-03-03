import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { DecodedJWT } from '../../interfaces/DecodeJWT';
import { getItem, removeItem, addItem } from '../../store/LocalStorage';

export function hasAuthenticated(): boolean {
  const token = getItem('token');
  const result = token ? tokenIsValid(token) : false;

  if (false === result) {
    removeItem('token');
  }
  console.log('isLogged', result);
  return result;
}

export async function DeleteUser(credentials: object): Promise<boolean> {
  await axios
        .post(`${process.env.REACT_APP_API_URL}auth/delete`, credentials, {
            withCredentials: true,
        });
    removeItem('token');
    return true;
}

export async function GetUser(): Promise<any> {
  const token = getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  };
return axios
  .get(`${process.env.REACT_APP_API_URL}/user/find-by-token/${token}`, config)
  .then((response) => response);

}

export async function login(credentials: object): Promise<boolean> {
  const response = await axios
        .post(`${process.env.REACT_APP_API_URL}/user/login`, credentials, {
            withCredentials: true,
        });
    const token = response.data.token;
    addItem('token', token);
    return true;
}

export async function register(credentials: object): Promise<boolean> {
  const response = await axios
        .post(`${process.env.REACT_APP_API_URL}/user/register`, credentials, {
            withCredentials: true,
        });
    const token = response.data.token;
    addItem('token', token);
    return true;
}

export  function logout(): Promise<String> {
  return  axios
        .post(
            `${process.env.REACT_APP_API_URL}/user/logout`,
            {},
            { withCredentials: true }
        ).then((res:any) => {
            return res.message;
        });
}

function tokenIsValid(token: string): boolean {
  const decoded: DecodedJWT = jwtDecode(token);
  const { exp: expiration } = decoded;

  if (expiration * 1000 > new Date().getTime()) {
    return true;
  }

  return false;
}

export async function UpdateUser(
  email: string,
  updatedFields: any
): Promise<any> {
  const token = getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  };

  const response = await axios.put(
    `${process.env.REACT_APP_API_URL}/user/modify/${email}`,
    {
      email,
      updatedFields,
    },
    config
  );
  return response;
}

export async function isUserAdmin(): Promise<any> {
  const token = getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  };
  const response = await axios
        .get(`${process.env.REACT_APP_API_URL}/user/find-by-token/${token}`, config);
    return response.data.isAdmin;
}
