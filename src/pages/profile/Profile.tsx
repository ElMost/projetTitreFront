import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { AuthContext } from '../../components/context/Auth';
import Hero from '../../components/hero/dashbordHero/DashboardHero';
import { DeleteAccount } from '../../components/modal/deleteAccount/DeleteAccount';
import { GetUser, UpdateUser } from '../../services/auth/AuthApi';
// import { GetUser, updateUser } from '../../services/auth/AuthApi';
// import { updateUser, GetUser } from '../../services/auth/auth/AuthApi';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Hero from '../../components/Hero/Hero';
// import { DeleteAccount } from '../../components/Modals/DeleteAccount/DeleteAccount';
// import { AuthContext } from '../../context/Auth';
// import { GetUser, updateUser } from '../../services/Auth/AuthApi';

export default function Profile() {
  const Auth = useContext(AuthContext);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
  });

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const result = await GetUser();
    const userData = {
      nom: result.data.nom,
      prenom: result.data.prenom,
      email: result.data.email,
      isAdmin: result.data.isAdmin,
    };
    setFormData(userData);
    Auth.setUser(userData);
    console.log(Auth.user);
    console.log(formData);
  }

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);

  const showModelfunction = () => {
    setShowDeleteAccountModal(!showDeleteAccountModal);
  };

  const upDateUser = async () => {
    await UpdateUser(Auth.user.email, {
      nom: formData.nom,
      prenom: formData.prenom,

      email: formData.email,
    }).then((e: any) => {
      console.log(e);
    });
  };

  // useEffect(() => {
  //   async function getUserData() {
  //     const result = await GetUser();
  //     const updatedUser = result.data;
  //     let { id, ...rest } = updatedUser;
  //     Auth.setUser(rest);
  //   }

  //   getUserData();
  // }, []);

  return (
    <div className="container md:block">
      {showDeleteAccountModal ? (
        <DeleteAccount
          isShowed={showModelfunction}
          data={undefined}
          updateReservations={function (data: any): void {
            throw new Error('Function not implemented.');
          }}
        />
      ) : null}

      <Hero />

      <Form className="px-5">
        <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
          <Form.Label>Nom : </Form.Label>
          <Form.Control
            className="w-72 mb-3 mx-5 pl-1 "
            type="text"
            placeholder="Nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className=" mb-3 mx-5" controlId="formBasicEmail">
          <Form.Label>Prénom : </Form.Label>
          <Form.Control
            className="w-72 mb-3  pl-1"
            type="text"
            placeholder="Prénom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
          <Form.Label>Email : </Form.Label>
          <Form.Control
            className=" w-72 mb-3 mx-5 pl-1"
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="flex ">
          <button
            type="button"
            onClick={() => upDateUser()}
            className="text-white bg-[#6D625C] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Update
          </button>
          <button
            onClick={() => showModelfunction()}
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Supprimer le compte
          </button>
        </div>{' '}
      </Form>
    </div>
  );
}
