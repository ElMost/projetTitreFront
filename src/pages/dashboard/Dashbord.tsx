import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { AuthContext } from '../../components/context/Auth';
import Hero from '../../components/hero/Hero';
import { Modification } from '../../components/service/modif/Modif';
// import { Revision } from '../../components/service/modif/Modif';
import ServiceCard from '../../components/serviceCard/Card';
// import Hero from '../../components/Hero/Hero';
// import { Revision } from '../../components/service/Revision/Revision';
// import ServiceCard from '../../components/ServiceCard/Card';
// import { AuthContext } from '../../context/Auth';
import { NosServicesData } from '../../data/ServiceData';
import { IService } from '../../interfaces/IService';
import { GetUser } from '../../services/auth/AuthApi';
import { getReservationsByEmail, addReservation, deleteReservation, UpdateReservation } from '../../services/reservation/ReservationApi';
// import { GetUser } from '../../services/auth/auth/AuthApi';
// import {
//   getReservationsByEmail,
//   addReservation,
//   deleteReservation,
// } from '../../services/auth/reservation/ReservationApi';
// import './Dashboard.css';
// import { IoChevronForward } from 'react-icons/io5';
// import { GetUser } from '../../services/Auth/AuthApi';
// import {
//   addReservation,
//   deleteReservation,
//   getReservationsByEmail,
// } from '../../services/Reservation/ReservationApi';
import './Dashboard.css';

const Dashboard = (props: { updateIsAdmin: (value: boolean) => void }) => {
  const Auth = React.useContext(AuthContext);
  const { updateIsAdmin } = props;
  const [Modify, setModify] = useState(0);
  const [servicesData, setServiceData] = useState<any>([]);
  const [selected, setSelected] = useState<{
    type?: string;
    date?: string;
    time?: string;
  }>({});
  const [services, setServices] = useState<IService[]>([]);
  const [reservation, setReservations] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModification, setshowModification] = useState(false);
  const [cardsPerPage] = useState(3);

  const [user, setUser] = useState({ nom: '', prenom: '', email: '', isAdmin: false });

  const showModelfunction = () => {
    setshowModification(!showModification);
  };

  const updateReservations = (updateObject : any) => {
    setReservations((prevState : any) => {
      const updateState = prevState.map((reservation: any) => {
        if (reservation.id === updateObject.id) {
          return {
            ...reservation,
            ...updateObject,
          }
        }
        return reservation;
      });
      return updateState;
    });
  };

  // const UpdateSingleReservation = async () => {


  useEffect(() => {
    async function fetchData() {
      const result = await GetUser();
      console.log(result);
      const updatedUser = result.data;
      const Services = NosServicesData;
      setUser(updatedUser);
      setServiceData(Services);

      Auth.setUser({
        email: result.data.email,
        nom: result.data.nom,
        prenom: result.data.prenom,
        // isAdmin: result.data.isAdmin,
      });
     updateIsAdmin(result.data.isAdmin);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchReservation() {

      if (Auth.user.email) {
        const result = await getReservationsByEmail(Auth.user.email);
        setReservations(result);
      }
    }
    fetchReservation();
  }, [Auth.user.email]);


  const handlePageClick = (data: any) => {
    let selected = data.selected;
    setCurrentPage(selected + 1);
  };

  const HandleUpdate = (data: any) => {
    setshowModification(true);
    setModify(data);
  };

  let startIndex = (currentPage - 1) * cardsPerPage;
  let endIndex = startIndex + cardsPerPage;
  let paginatedCards = reservation.slice(startIndex, endIndex);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected({ ...selected, [event.target.name]: event.target.value });
  };

  const handleAddService = () => {
    console.log(selected);

    if (!selected.type || !selected.date || !selected.time) return;

    const selectedDateTime = new Date(`${selected.date} ${selected.time}`);
    const now = new Date();
    const fortyEightHoursFromNow = new Date(
      now.getTime() + 48 * 60 * 60 * 1000
    );

    if (selectedDateTime >= fortyEightHoursFromNow) {
      setServices([
        ...services,
        { type: selected.type, date: selected.date, time: selected.time },
      ]);
      addReservation({
        nomDesServices: selected.type,
        date: new Date(selected.date),
        heure: selected.time,
        email: Auth.user.email,
      })
        .then(() => {
         console.log('reservation added');
         
          getReservationsByEmail(Auth.user.email).then((res: any) => {
            setReservations(res);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert(
        'Votre réservation ne pourra avoir lieu que dans les 48 prochaines heures'
      );
    }
  };

  const handleDeleteReservation = (index: string) => {
    deleteReservation(index).then(() => {
      getReservationsByEmail(Auth.user.email).then((res: any) => {
        setReservations(res);
      });
    });
  };

  // const handleDelete = (id: number) => {
  //   deleteReservation(id).then((response) => {
  //     console.log(response);
  //     getReservationsByEmail(Auth.user.email).then((response) => {
  //       setReservations(response.data);
  //     });
  //   });
  // };

  return (
    <div className="containerDashboard md:w-12/12 lg:w-9/12 mx-auto md:block mb-5 ">
      <Hero />
      {showModification ? (
        <Modification
          isShowed={showModelfunction}
          data={Modify}
         updateReservations={updateReservations}
          
        />
      ) : null}

      <Form className="grid grid-cols-1 md:grid-cols-4 gap-4 px-3">
        {/* <Form.Group as={Col} controlId="formType">
          <Form.Label className="block">Type de service</Form.Label>
          <FormControl as="select" name="type" onChange={handleChange}>
            <option value="">Choisir un type</option>
            {servicesData.map((service: any, index: any) => (
              <option key={index} value={service.nomDesServices}>
                {service.nomDesServices}
              </option>
            ))}
          </FormControl>
        </Form.Group> */}

        <Form.Group as={Col} controlId="formType">
         <Form.Label className='block text-[#6D625C] text-lg text-bold'>Type de service</Form.Label>
          <Form.Control
            as="select"
            name="type"
            onChange={handleChange}
            // defaultValue="Choisir..."
          >
            <option value="">Choisir un service</option>
            {servicesData.map((service: any, index: any) => (
              <option key={index} value={service.nomDesServices}>
                {service.nomDesServices}
              </option>
            ))}

          </Form.Control>
        </Form.Group>


        {/* <Form.Group></Form.Group> */}

        <Form.Group as={Col} controlId="formDate">
          <Form.Label className='block text-[#6D625C] text-lg text-bold'>Date</Form.Label>
          <FormControl type="date" name="date" onChange={handleChange} />
        </Form.Group>

        {/* <Form.Group></Form.Group> */}

        <Form.Group as={Col} controlId="formTime">
          <Form.Label className='block text-[#6D625C] text-lg text-bold '>Heure</Form.Label>
          <FormControl type="time" name="time" onChange={handleChange} />
        </Form.Group>

        {/* <Form.Group></Form.Group> */}

        <Form.Group as={Col} controlId="formButton" style={{ color: 'black' }}>
          <Form.Label className='block text-[#6D625C] text-lg text-bold invisible'>Envoyer</Form.Label>
          <Button
            className="bg-green-500 outline-none border-0 p-2 rounded-xl"
            style={{ width: '100%', color: 'white' }}
            onClick={handleAddService}
          >
            Ajouter
          </Button>
        </Form.Group>
      </Form>

      <div  className="flex justify-center items-center">
        {reservation.length > 0 && (
          <Row className="grid grid-cols-1 md:grid-cols-3">
            {paginatedCards.map((service: any, index: any) => (
              <ServiceCard
                key={index}
                index={index}
                HandleUpdate={HandleUpdate}
                service={service}
                handleRemoveReservation={handleDeleteReservation}
              />
            ))}
          </Row>
        )}
      </div>
      <div className="flex justify-center ">
        <ReactPaginate
          previousLabel={
                 <FaArrowLeft/>
          }

          nextLabel={
            <FaArrowRight/>
          }

         

          breakLabel={'...'}
          breakClassName={
            'px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          }
          pageCount={Math.ceil(reservation.length / cardsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'inline-flex items-center -space-x-px'}
          pageLinkClassName={
            'px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          }
          activeClassName={'active bg-indigo-500 text-white'}
        />
      </div>
    </div>
  );
};

export default Dashboard;