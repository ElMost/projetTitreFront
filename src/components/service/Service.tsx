import React from 'react';

const Service: React.FC<any> = ({ data }: any) => {
  return (
    <div className="w-full max-w-sm  rounded-lg ">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="lg:w-40 lg:h-40 mb-3 rounded-full shadow-lg"
          src={require(`../../assets/services/${data.src}.png`)}
          alt={data.nomDesServices}
        />
        <h5 className="mb-1 text-xs lg:text-sm font-medium text-gray-900 ">
          {data.nomDesServices}
        </h5>
      </div>
    </div>
  );
};

export default Service;
