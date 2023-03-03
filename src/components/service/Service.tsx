import React from 'react';
import { getSrcFromNomDesServices } from '../../data/ServiceData';

const Service: React.FC<any> = ({ data }: any) => {
  return (
    <div className="w-full max-w-sm  rounded-lg ">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center ">
        <img
          className="
           mb-3 rounded-full shadow-lg
          "
          src={require(`../../assets/services/${getSrcFromNomDesServices(data.nomDesServices)}.png`)}
          alt={data.nomDesServices}
        />
        <h5 className="mb-1 text-sm lg:text-sm font-medium text-gray-900 ">
          {data.nomDesServices}
        </h5>
      </div>
    </div>
  );
};

export default Service;
