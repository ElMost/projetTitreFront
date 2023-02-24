import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import'./Contact.css';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        from_name: '',
        from_email: '',
        message: '',
    });

         const [alertMessage, setAlertMessage] = useState('');

          useEffect(() => {
            if (alertMessage !== '') {
              alert(alertMessage);
              setAlertMessage('');
            }
          }, [alertMessage]);

           const handleSubmit = async (e: { preventDefault: () => void }) => {
             e.preventDefault();
             const { from_name, from_email, message } = formData;
             const templateParams = {
               from_name,
               from_email,
               message,
             };
             try {
               await emailjs.send(
                 'service_si24wxk',
                 'template_n1f96k8',
                 templateParams,
                 'cM4VdLxWyeoIM2VrF'
               );
               alert('Message envoyé !');
             } catch (error) {
               alert('Une erreur est survenue, veuillez réessayer');
             }

             setFormData({
               from_name: '',
               from_email: '',
               message: '',
             });
           };

            const handleChange = (e: {
                target: { name: any; value: any };
                }) => {
                    setFormData({ ...formData, [e.target.name]: e.target.value });
                };




  return (
    <div className="w-11/12 lg:w-8/12 m-auto mt-10 mb-0  p-3 rounded-xl contact">
      <h1 className="lg:text-3xl font-bold text-[#6D625C] mb-5">
        Contactez-nous
      </h1>

      <form action="">
        <div className="flex flex-col mb-4">
          <label
            htmlFor="name"
            className="mb-2 text-lg font-bold text-[#6D625C] "
          >
            Nom
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Nom"
            value={formData.from_name}
            onChange={handleChange}
            className="border-2 border-gray-200 p-2 rounded-lg outline-none focus:border-green-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="email"
            className="mb-2 text-lg font-bold text-[#6D625C]"
          >
            Email
          </label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            placeholder="Email"
            value={formData.from_email}
            onChange={handleChange}
            className="border-2 border-gray-200 p-2 rounded-lg outline-none focus:border-green-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="message"
            className="mb-2 text-lg font-bold text-[#6D625C]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border-2 border-gray-200 p-2 rounded-lg outline-none focus:border-green-500"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-lg shadow font-medium w-full hover:bg-green-600
          transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110
          "
          onClick={handleSubmit}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
