import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className=" py-1 px-1 xs:w-11/12 md-w-11/12 m-1 lg:m-12  rounded-md about">
      <h1 className="w-full pl-5 mt-10 md:mt-0 md:ml-0 lg:pb-5  lg:text-3xl font-bold text-[#6D625C]">
        Qui sommes-nous ?
      </h1>

      <div className="m-0 w-full grid grid-cols-1 gap-10 lg:gap-5  lg:grid-cols-2 lg:w-11/12 lg:m-auto space-x- h-full bg-red p-0 mb-0   pb-5  ">
        <div className="font-semibold   text-xl  text-[rgb(109,98,92)]">
          <div className='align-middle	'>
            <div className="flex justify-between space-y-14 flex-col ">
              <div className="font-semibold border border-[#6D625C] py-4 px-4 mx-1 text-sm md:text-lg   bg-[#F9F7F4] rounded-md">
                ENTREPRISE D'AIDE A DOMICILE FAMILLIALE
              </div>

              <div className="font-semibold border border-[#6D625C] py-4 px-4 mx-1 text-sm md:text-lg lg:text-xl  bg-[#F9F7F4] rounded-md">
                DANS LE SECTEUR 95
              </div>

              <div className="font-semibold border border-[#6D625C] py-4 px-4 mx-1 text-sm md:text-lg lg:text-xl  bg-[#F9F7F4] rounded-md">
                {' '}
                ACTIVITÉS PRESTATAIRES
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-around 
        text-sm md:text-lg lg:text-xl  rounded-md font-semibold border border-[#6D625C] py-5 px-4 bg-[#F9F7F4]     text-[#6D625C]"
        >
          <p className="mb-10 lg:mb-0 ">
            <span className=" text-[#007FF0] ">Santélys.</span> est résolument
            engagé dans une démarche de qualité et ne cesse d'améliorer son
            offre pour répondre aux besoins de tous.
          </p>

          <p>
            <span className=" text-[#007FF0] ">Santélys.</span> se distingue par
            ses valeurs de proximité et de personnalisation de l'offre de
            service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
