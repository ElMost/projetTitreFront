import axios from 'axios';
import { IReservation } from '../../interfaces/IReservation';

export function getAllReservations(): Promise<any> {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/reservation`)
    .then((res) => res.data);
}

export function addReservation(reservation: IReservation): Promise<any> {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/reservation`, reservation)
    .then((res) => res.data);
}

export function deleteReservation(id: string): Promise<boolean> {
  return axios
    .delete(`${process.env.REACT_APP_API_URL}/reservation/${id}`)
    .then(() => true);
}

export function UpdateReservation(id: string, newData: any): Promise<boolean> {
  return axios
    .put(`${process.env.REACT_APP_API_URL}/reservation/${id}`, newData)
    .then((response) => response.data);
}

export async function getReservationsByEmail(
  email: string
): Promise<IReservation[]> {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/reservation/by-email/${email}`)
    .then((res) => {
      return res.data;
    });
}
