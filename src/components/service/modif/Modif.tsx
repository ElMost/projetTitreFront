import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Col, Form, FormControl } from 'react-bootstrap';
import { IshowModalComponentModif } from '../../../interfaces/IShowModalComponentModif';
import { NosServicesData } from '../../../data/ServiceData';
import { UpdateReservation } from '../../../services/reservation/ReservationApi';

export const Modification: React.FC<IshowModalComponentModif> = ({
  isShowed,
  data,
  updateReservations,
}: IshowModalComponentModif) => {
  const date = new Date(data.date);
  const [showModal, setShowModal] = useState(true);
  const [servicesData, setServiceData] = useState(NosServicesData);
  const [selected, setSelected] = useState<{
    type?: string;
    date?: string;
    time?: string;
  }>({
    date: date.toISOString().substring(0, 10),
    time: data.heure,
    type: data.nomDesServices,
  });

  const UpdateSingleReservation = async () => {
    await UpdateReservation(data.id, {
      nomDesServices: selected.type,
      date: selected.date,
      heure: selected.time,
    }).then((s) => {
      //console.log(selected)
      if (selected !== undefined) {
      }

      updateReservations(s);
    });
  };

 

  // useEffect(() => {
  //   const fetch = async () => {
  //     /*  const servicesFetch = await getServices();
  //     setServiceData(servicesFetch.data); */
  //   };
  //   fetch();
  // }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected({ ...selected, [event.target.name]: event.target.value });
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Mise à jour</h3>
                  <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <Form className="p-10">
                  <Form.Group as={Col} controlId="formType">
                    <Form.Label>Type de service</Form.Label>
                    <FormControl
                      as="select"
                      name="type"
                      value={selected.type}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option unselectable="on">Choisir un type</option>
                      {servicesData.map((service: any) => (
                        <option
                          key={service.nomDesServices}
                          className="text-gray-700"
                        >
                          {service.nomDesServices}
                        </option>
                      ))}
                    </FormControl>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="formDate"
                    className="text-gray-900"
                  >
                    <Form.Label className="block font-medium mb-1">
                      Date
                    </Form.Label>

                    <FormControl
                      type="date"
                      name="date"
                      value={selected.date}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="formTime"
                    className="text-gray-900"
                  >
                    <Form.Label className="block font-medium mb-1">
                      Heure
                    </Form.Label>
                    <FormControl
                      type="time"
                      name="time"
                      value={selected.time}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="formButton"
                    className="text-gray-900 flex justify-end"
                    // style={{ color: 'black' }}
                  ></Form.Group>
                </Form>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => isShowed()}
                  >
                    Close
                  </button>
                  <button
                    className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => UpdateSingleReservation()}
                  >
                    Confirmer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
