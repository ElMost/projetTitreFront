import React from 'react';
import Signup from '../../components/authentification/signup/Signup';

const FormulaireAuthentification = () => {
    return (
      <div className="flex justify-center items-center mt-8 mb-8 ">
        <div className="lg:w-6/12 w-8/12  grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0   rounded-xl  ">
          <Signup />
        </div>
      </div>
    );
};

export default FormulaireAuthentification;