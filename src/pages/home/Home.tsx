import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container1 mt-0 py-0">
      <div className="containerHome mx-3 lg:w-9/12 lg:mx-auto -mb-80 ">
        <div className="banner py-0 px-5">
          <div className="banner-text">
            <h1 className="text-base mt-0 md:text-lg lg:text-2xl text-md-start mb-0 py-0 h1">
              Avec <span className="text-[#007FF0]">Santélys.</span> je peux
              compter sur une aide à domicile de qualité 24h/24 et 7j/7
            </h1>
          </div>
        </div>
        <div className="p-0 {imgHome}">
          <div className=" description py-0 px-2 lg:px-5">
            <h3 className="h3 text-base md:text-lg lg:text-2xl text-md-start my-0">
              Découvrez les avantages de faire appel à {''}
              <span className="text-[#007FF0]">Santélys</span> pour l'aide à
              domicile.
            </h3>
            <br />
            <p className="text-sm md:text-lg lg:text-xl text-justify mb-1">
              Chaque jour, nos auxiliaires de vie vous accompagnent dans tous
              les gestes de la vie quotidienne. Nous vous proposons des
              prestations de qualité, adaptées à vos besoins et à votre budget.
            </p>
            
            <h3 className="h3 
            m-0 p-0
            text-base md:text-lg lg:text-2xl text-md-start ">
              {' '}
              <span className="text-[#007FF0] ">Santélys.</span>
            </h3>
            <p className="text-sm md:text-lg lg:text-xl text-justify mb-1">
              Professionnels de l'aide à domicile
            </p>
            <p className="text-sm md:text-lg lg:text-xl text-justify mb-1">
              Santé, bien-être et autonomie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
