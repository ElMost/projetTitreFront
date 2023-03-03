import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { IServiceCardProps } from '../../interfaces/IServiceCardProps';
// import { FaTrash } from 'react-icons/fa';
// import { FaPen } from 'react-icons/fa';
import { FaTrash, FaPen } from 'react-icons/fa';
import { getSrcFromNomDesServices } from '../../data/ServiceData';




const ServiceCard: React.FC<IServiceCardProps> = ({
  service,
  index,
  handleRemoveReservation,
  HandleUpdate,
}) => {
  return (
    <Col className=" p-3" key={index} xs={12} md={6} lg={3}>
      <Card
        className=" p-2 shadow-lg rounded-lg bg-white "
        // style={{ margin: '30px 0px 30px ', backgroundColor: '#E7E3D8' }}
      >
        <Card.Body className="  h-72 m-auto p-1  flex flex-col ">
          <Card.Img
            className="mx-auto text-center  mb-3 rounded-full shadow-lg"
            variant="top"
            src={require(`../../assets/services/${getSrcFromNomDesServices(
              service.nomDesServices
            )}.png`)}
          />
          <hr />
          <Card.Title className="block text-black-400">
            {service.nomDesServices.slice()}
          </Card.Title>
          <hr />
          <Card.Subtitle className="block">
            <span>Date : </span>
            {service.date.slice(0, 10)}
          </Card.Subtitle>
          <hr />
          <Card.Subtitle className="block">
            <span>Heure : </span>
            {service.heure}
          </Card.Subtitle>
          <hr />
          <div className="flex justify-end space-x-2 mt-2">
            <button
              onClick={() => handleRemoveReservation(service.id)}
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm p-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              <FaTrash />
            </button>
            <button
              onClick={() => HandleUpdate(service.id)}
              className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm p-2 dark:focus:ring-yellow-900"
            >
              <FaPen />
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceCard;
