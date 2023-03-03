import React, { useEffect, useState } from 'react';
import './Postuler.css';
import emailjs from 'emailjs-com';

const Postuler = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState('');

  const [FormData, setFormData] = React.useState({
    nom: '',
    prenom: '',
    email: '',
    message: '',
    attachment: '',
  });

  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (alertMessage !== '') {
      alert(alertMessage);
      setAlertMessage('');
    }
  }, [alertMessage]);

  //   const [nom, setNom] = useState('');
  //   const [prenom, setPrenom] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [message, setMessage] = useState('');
  //   const [attachment, setAttachment] = useState('');

  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const { nom, prenom, email, message, attachment } = FormData;

    const templateParams = {
      nom,
      prenom,
      email,
      message,
      attachment,
    };

    try {
      await emailjs.send(
        'service_si24wxk',
        'template_n1f96k8',
        templateParams,
        'cM4VdLxWyeoIM2VrF'
      );
      alert('Votre message a été envoyé avec succès!');
    } catch (error) {
      alert('Une erreur est survenue, veuillez réessayer');
    }

    setFormData({
      nom: '',
      prenom: '',
      email: '',
      message: '',
      attachment: '',
    });
  };

 

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  return (
    <div className=" flex-col justify-center items-center postuler mt-5">
      <div className="grid grid-cols-1   space-x-10 h-full  lg:pl-60 lg:pr-60 md:pl-20 md:pr-20 mb-10 ">
        <div className="containerPostuler flex flex-col  m-1 bg-[#e8e4d9] p-2">
          <h1 className="text-xl mt-1 md:text-2xl lg:text-3xl font-bold text-[#6D625C]">
            Rejoindre <span className="text-[#007FF0]"> Santélys </span>
          </h1>{' '}
          <p className="mt-0 text-xs lg:text-xl text-[#6D625C] mb-4 font-bold  text-dark">
            {' '}
            Nous sommes toujours à la recherche de nouveaux talents pour
            renforcer notre équipe.{' '}
          </p>
          <div>
            <div className="py-2">
              <input
                type="text"
                id="nom"
                name="nom"
                placeholder="Nom"
                value={FormData.nom}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 p-2 rounded-lg outline-none focus:border-green-500"
              />
            </div>

            <div className="py-2">
              <input
                type="text"
                id="prenom"
                name="prenom"
                placeholder="Prénom"
                value={FormData.prenom}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 p-2 rounded-lg outline-none focus:border-green-500"
              />
            </div>
            <div className="py-2">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={FormData.email}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 p-2 rounded-lg outline-none focus:border-green-500"
              />
            </div>
            <div className="py-2">
              <input
                type="file"
                id="attachment"
                name="attachment"
                placeholder="CV"
                value={FormData.attachment}
                onChange={handleChange}
                className=" w-full border-2 border-gray-200 p-2 rounded-lg outline-none focus:border-green-500"
              />
            </div>
            <div className="py-2">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={FormData.message}
                onChange={handleChange}
                className=" w-full border-2 border-gray-200 p-2 rounded-lg outline-none focus:border-green-500"
              />
            </div>

            <div>
              <button
                type="submit"
                // className="text-white bg-[#FF0101] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-full"

                className=" w-full px-8 py-2 uppercase rounded-full bg-blue-600 text-white font-semibold text-center block hover:bg-blue-500 focus:ring-opacity-80 cursor-pointer"
                onClick={handleFormSubmit}
              >
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postuler;
