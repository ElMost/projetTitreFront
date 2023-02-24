import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="m-10 mb-5 pb-5 about">
      <h1 className="w-full mt-10 md:mt-0 md:ml-0  lg:text-3xl font-bold text-[#6D625C]">
        Qui sommes-nous ?
      </h1>

      <div className="m-0 w-full grid grid-cols-1 gap-10 lg:gap-20  lg:grid-cols-2 lg:w-10/12 lg:m-auto space-x- h-full bg-red p-0 mb-0   pb-5  ">
        <div className="font-semibold   text-xl  text-[#6D625C]">
          <div>
            <div className="flex justify-between space-y-7 flex-col">
              <div className="font-semibold border border-[#6D625C] py-5 px-4 m bg-[#F9F7F4] rounded-md">
                ENTREPRISE D'AIDE A DOMICILE FAMILLIALE
              </div>

              <div className="font-semibold border border-[#6D625C] py-5 px-4 bg-[#F9F7F4] rounded-md">
                DANS LE SECTEUR 95
              </div>

              <div className="font-semibold border border-[#6D625C] py-5 px-4 bg-[#F9F7F4] rounded-md">
                {' '}
                ACTIVITÉS PRESTATAIRES
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around rounded-md font-semibold border border-[#6D625C] py-5 px-4 bg-[#F9F7F4]   text-xl  text-[#6D625C]">
          <p className="mb-10 lg:mb-0">
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
