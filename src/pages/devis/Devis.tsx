import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { frequencyData } from '../../data/FrequenceData';
import { serviceDataCheckboxItems, serviceData } from '../../data/ServiceData';
import { CheckboxItem } from '../../interfaces/CheckboxItems';
import { DevisData } from '../../interfaces/DevisData';
// import { frequencyData } from '../../components/data/FrequenceData';
// import {  serviceData, serviceDataCheckboxItems } from '../../components/data/ServiceData';
// import { DevisData } from '../../components/interfaces/DevisData';
// import { CheckboxItem } from '../../components/interfaces/CheckboxItems';
import './Devis.css';


const Devis = () => {

    const [frequency, setFrequency ]= useState(0)
    const [data, setData] = useState<DevisData>({
        services: [],
        serviceTypes: [],
        frequency: 0,
    });
    
    const [checked, setChecked] = useState(Boolean);
     const [checkboxItems, setCheckboxItems] = useState<CheckboxItem[]>(
    serviceDataCheckboxItems
  );

    const handleCheckboxChange = (index: number) => {
        const newCheckboxItems = [...checkboxItems];
        newCheckboxItems[index].isChecked = !newCheckboxItems[index].isChecked;
        setCheckboxItems(newCheckboxItems);
    };

     const getServiceType = (serviceName: any) => {
    const service = serviceData.find((s) => s.nom === serviceName);
    return service ? service.type : 'bug de type';
  };

    const handleSubmit = () => {
      const services = checkboxItems
        .filter((item) => item.isChecked)
        .map((item) => item.value);

      const serviceTypes = services.map((service) => getServiceType(service));

      setData({ services, serviceTypes, frequency: frequency });
      console.log(frequency);
      setChecked(true);

      console.log(data);
    };


        

  return (
    <div className=" w-full containerDevis mt-0 mb-5 p-0 flex  justify-center">
      <div
        className="w-11/12 flex flex-wrap justify-between  pb-2 

      "
      >
        <div className="w-full lg:w-5/12  ">
          <div className="border pb-0 p-2 mt-2 ">
            <p className="mt-2 text-2xl mb-4 font-bold  text-dark">
              Services <span className="text-[#007FF0]">Santélys</span>{' '}
              souhaités :
            </p>
            <form>
              <div className="mt-2 ">
                {checkboxItems.map((item, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      className="text-black"
                      checked={item.isChecked}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <label className="ml-2 text-dark">{item.value}</label>
                  </div>
                ))}
              </div>
              <div className="text-center mt-2 mb-5">
                <Button
                  className="button bg-green-500 text-white p-1 w-full"
                  onClick={() => handleSubmit()}
                >
                  Valider
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-5/12  ">
          {checked && (
            <div className="border p-2 mt-2">
              <p className="mt-2 text-2xl mb-4 font-bold  text-dark">
                Services <span className="text-[#007FF0]">Santélys</span>{' '}
                sélectionnés :
              </p>
              <div>
                <table className="table-auto p-2 mb-3">
                  <thead>
                    <tr>
                      <th className="w-8/12 text-start">Service</th>
                      <th className="w-40 text-start">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.services.map((service: string, index: number) => (
                      /*     <li key={index}>
                    {service}
                    {data.serviceTypes[index]}
                  </li> */

                      <tr key={index}>
                        <td className="w-40"> {service}</td>
                        <td className="w-40 text-start">
                          {' '}
                          {data.serviceTypes[index]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <hr />

              <form className="mt-0 mb-5">
                <div className="mt-4">
                  <p className="mt-2 text-2xl mb-4 font-bold  text-dark">
                    Fréquence des services sélectionnés:
                  </p>
                  <div className="flex flex-col">
                    <div>
                      <input
                        name="group1"
                        type="radio"
                        value={frequencyData[0].value}
                        onChange={() => setFrequency(0)}
                      />
                      <label className="ml-2 text-dark">
                        {frequencyData[0].nom}
                      </label>
                    </div>
                    <div>
                      <input
                        name="group1"
                        type="radio"
                        value={frequencyData[1].value}
                        onChange={() => setFrequency(1)}
                      />
                      <label className="ml-2 text-dark">
                        {frequencyData[1].nom}
                      </label>
                    </div>

                    <div>
                      <input
                        name="group1"
                        type="radio"
                        value={frequencyData[2].value}
                        onChange={() => setFrequency(2)}
                      />
                      <label className="ml-2 text-dark">
                        {frequencyData[2].nom}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <Button
                    className="button bg-blue-500 text-white p-1 w-full mb-5"
                    onClick={() => {
                      setChecked(true);
                      handleSubmit();
                    }}
                  >
                    Envoyer
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
        <div style={{ widows: '850px' }}> </div>
      </div>
    </div>
  );
};

export default Devis;
