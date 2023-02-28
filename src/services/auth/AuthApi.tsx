import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { DecodedJWT } from '../../interfaces/DecodeJWT';
import { getItem, removeItem, addItem } from './store/LocalStorage';


export function hasAuthenticated(): boolean {
  const token = getItem('token');
  const result = token ? tokenIsValid(token) : false;

  if (false === result) {
    removeItem('token');
  }
  console.log('isLogged', result);
  return result;
}


export function GetUser(): Promise<any> {
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


export function register(credentials: object): Promise<boolean> {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/user/register`, credentials, {
      withCredentials: true,
    })
    .then((response) => response.data.token)
    .then((token) => {
      addItem('token', token);
      return true;
    });
}


export function login(credentials: object): Promise<boolean> {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/user/login`, credentials, {
      withCredentials: true,
    })
    .then((response) => response.data.token)
    .then((token) => {
      addItem('token', token);
      return true;
    });
}



export function logout(): Promise<String> {
  return axios
    .post(
      `${process.env.REACT_APP_API_URL}/user/logout`,
      {},
      { withCredentials: true }
    )
    .then((res: any) => {
      return res.message;
    });
}


export function DeleteUser(credentials: object): Promise<boolean> {
  return axios
    .post(`${process.env.REACT_APP_API_URL}auth/delete`, credentials, {
      withCredentials: true,
    })
    .then(() => {
      removeItem('token');
      return true;
    });
}


export async function updateUser (email:string, updateFields:any) : Promise<any> {
  const response = await axios.put(`${process.env.REACT_APP_API_URL}/auth/update`, {
    email,
    updateFields
  })
  return response.data
}


function tokenIsValid(token: string): boolean {
  const decoded: DecodedJWT = jwtDecode(token);
  const { exp: expiration } = decoded;

  if (expiration * 1000 > new Date().getTime()) {
    return true;
  }

  return false;
}