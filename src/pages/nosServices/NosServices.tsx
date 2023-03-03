import React, { useState } from 'react';
import Service from '../../components/service/Service';
import { NosServicesData} from '../../data/ServiceData';
import './NosServices.css'

const NosServices = () => {
   
    
   

    return (
      <div className=" w-full  lg:w-11/12 mx-auto p-0 mb-1 md:p-5  mt-0 ">
        <h1 className=" md:mt-0 md:ml-0 ml-2 lg:text-3xl font-bold text-[#6D625C] ">
          {' '}
          Nos services <span className="text-[#007FF0]">Santélys.</span>
        </h1>
        <div className="   justify-center grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-10 mt-3 mb-20 ">
          <div className=" mx-1 lg:mx-0 md:ml-0 containService shadow-2xl rounded-lg p-2 ">
            <p className="mt-1  mb-1 md:mt-0  text-2xl lg:text-3xl font-bold text-[#6D625C]">
              Aide à domicile
              <br />
            </p>

            <div className="grid grid-cols-3 gap-5 ">
              {NosServicesData.filter(
                (service: any) => service.type === 'domicile'
              ).map((service: any, index) => (
                <Service key={index} data={service} />
              ))}
            </div>
          </div>
          <div className="  mx-1 lg:mx-0  md:ml-0 containService shadow-2xl rounded-lg p-2">
            <p className="mt-1  mb-1 md:mt-0   text-2xl lg:text-3xl font-bold text-[#6D625C]">
              Aide à l'autonomie
              <br />
            </p>
            <div className="grid grid-cols-3 gap-4">
              {NosServicesData.filter(
                (service: any) => service.type === 'autonomie'
              ).map((service: any, index) => (
                <Service key={index} data={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default NosServices;