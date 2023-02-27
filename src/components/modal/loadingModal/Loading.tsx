import { useState } from 'react';
import { Iloading } from '../../../interfaces/Iloading';
import './Loading.css';

export const Loading: React.FC<Iloading> = ({ loading }: Iloading) => {
  const [isLoading, setIsLoading] = useState(loading);

  return (
    <div
      style={{ display: isLoading ? 'flex' : 'none' }}
      className="modal z-11"
    >
      <div className="modal-content">
        <div className="loader"></div>
        <div className="modal-text">Chargement...</div>
      </div>
    </div>
  );
};
