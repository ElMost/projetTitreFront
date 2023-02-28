import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../services/auth/AuthApi';
import { AuthContext } from '../../context/Auth';
import { Loading } from '../../modal/loadingModal/Loading';

const Signup = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
  const { setIsAuthenticated } = React.useContext(AuthContext);
  const Auth = useContext(AuthContext);

  const [NomVerifed, setNomVerifed] = React.useState(false);
  const [PrenomVerifed, setPrenomVerifed] = React.useState(false);
  const [EmailVerifed, setEmailVerifed] = React.useState(false);
  const [PasswordVerifed, setPasswordVerifed] = React.useState(false);

  const [user, setUser] = React.useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });

    if (event.target.name === 'nom') {
      let re = /^[a-zA-Z]+$/;
      setNomVerifed(re.test(event.target.value));
      console.log(NomVerifed);
    }

    if (event.target.name === 'prenom') {
      let re = /^[a-zA-Z]+$/;
      setPrenomVerifed(re.test(event.target.value));
      console.log(PrenomVerifed);
    }

    if (event.target.name === 'email') {
      let re = /\S+@\S+\.\S+/;
      setEmailVerifed(re.test(event.target.value));
      console.log(EmailVerifed);
    }

    if (event.target.name === 'password') {
      let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      setPasswordVerifed(re.test(event.target.value));
      console.log(PasswordVerifed);
    }
  };

  const SignUpUser = async () => {
    setIsLoading(!isLoading);

    setTimeout(async () => {
      try {
        const response = await register(user);
        console.log(response);
        setIsAuthenticated(response);

        if (response) {
          navigate('/dashboard');
          Auth.setUser({
            nom: user.nom,
            prenom: user.prenom,
            email: user.email,
          });
        }
      } catch (response) {
        console.log(response);
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <div className="bg-[#E8E4D9] shadow-2xl  lg:shadow-none lg:rounded-tr-xl lg:rounded-br-xl">
      {isLoading ? <Loading loading={true} /> : null}
      <div className="flex justify-center items-center">
        <div className="w-full flex-1">
          <div className="w-full mx-auto overflow-hidden">
            <div className="px-5 py-0 h-10/12">
              <h1 className="text-3xl font-bold text-[#6D625C]">Inscription</h1>
              <div className="mt-10">
                <div className="relative">
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    value={user.nom}
                    onChange={handleInputChange}
                    className={`shadow  rounded w-full py-2 px-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                      user.nom === ''
                        ? 'border-gray-500 border-2'
                        : NomVerifed === false
                        ? 'border-red-500 border-2'
                        : 'border-green-500 border-2'
                    }`}
                    placeholder="Nom"
                  />
                </div>
                <div className="mt-5 relative">
                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    value={user.prenom}
                    onChange={handleInputChange}
                    className={`shadow  rounded w-full py-2 px-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                      user.prenom === ''
                        ? 'border-gray-500 border-2'
                        : PrenomVerifed === false
                        ? 'border-red-500 border-2'
                        : 'border-green-500 border-2'
                    }`}
                    placeholder="Prénom"
                  />
                </div>
                <div className="mt-5 relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={handleInputChange}
                    className={`shadow  rounded w-full py-2 px-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                      user.email === ''
                        ? 'border-gray-500 border-2'
                        : EmailVerifed === false
                        ? 'border-red-500 border-2'
                        : 'border-green-500 border-2'
                    }`}
                    placeholder="Email"
                  />
                </div>
                <div className="mt-5 relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={user.password}
                    onChange={handleInputChange}
                    className={`shadow  rounded w-full py-2 px-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                      user.password === ''
                        ? 'border-gray-500 border-2'
                        : PasswordVerifed === false
                        ? 'border-red-500 border-2'
                        : 'border-green-500 border-2'
                    }`}
                    placeholder="Mot de passe"
                  />
                </div>
                <div className="mt-5 relative bottom-0">
                  <button
                    onClick={() => SignUpUser()}
                    className=" w-full px-8 py-2 uppercase rounded-full bg-blue-600 text-white font-semibold text-center block hover:bg-blue-500 focus:ring-opacity-80 cursor-pointer"
                  >
                    Enregister
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
