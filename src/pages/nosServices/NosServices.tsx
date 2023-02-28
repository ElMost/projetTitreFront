import React, { useState } from 'react';
import Service from '../../components/service/Service';
import { ServiceData } from '../../data/ServiceData';

const NosServices = () => {
    const [services, setServices] = useState(ServiceData)

    return (
      <div className=" p-0 mb-10 md:p-7 md:m-7">
        <h1 className="mt-20 md:mt-0 md:ml-0 ml-10 text-3xl font-bold text-[#6D625C]">
          {' '}
          Nos services <span className="text-[#007FF0]">Santélys.</span>
        </h1>
        <div className="   justify-center grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-10 mt-10 mb-10">
            <div className=" mx-4 lg:mx-0 md:ml-0 bg-[#E8E4D9] shadow-2xl rounded-lg p-2">
            <p className="mt-10  mb-10 md:mt-0 lg:ml-10 text-xl lg:text-3xl font-bold text-[#6D625C]">
            Aide à domicile
            <br />
          </p>

          <div className="grid grid-cols-3 gap-10">
            {services
              .filter((service: any) => service.type === 'domicile')
              .map((service: any, index) => (
                <Service key={index} data={service} />
              ))}
            </div>
        </div>
      <div className="  mx-4 lg:mx-0  md:ml-0 bg-[#E8E4D9] shadow-2xl rounded-lg p-2">
          <p className="mt-10  mb-10 md:mt-0  lg:ml-10 text-xl lg:text-3xl font-bold text-[#6D625C]">
            Aide à l'autonomie
            <br />
          </p>
          <div className="grid grid-cols-3 gap-4">
            {services
              .filter((service: any) => service.type === 'autonomie')
              .map((service: any, index) => (
                <Service key={index} data={service} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosServices;