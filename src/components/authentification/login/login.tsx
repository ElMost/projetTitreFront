/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';
import { Loading } from '../../modal/loadingModal/Loading';
import ResetPassowrdEmailModal from '../../modal/loadingModal/resetPasswordEmailModal/ResetPassowrdEmailModal';
import './Login.css';


const Login = () => {

     const [isLoading, setIsLoading] = useState(false);
     const [isMotDePasseOublie, setisMotDePasseOublie] = useState(false);
     const [EmailVerifed, setEmailVerifed] = useState(false);
     const [passVerifed, setPassVerifed] = useState(false);
     const { setIsAuthenticated } = useContext(AuthContext);
     const Auth = useContext(AuthContext);
     const navigate = useNavigate();
     const [user, setUser] = useState({
       email: '',
       password: '',
     });




  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });

    if (event.target.name === 'email') {
      let re = /\S+@\S+\.\S+/;
      setEmailVerifed(re.test(event.target.value));
      console.log(EmailVerifed);
    }

    if (event.target.name === 'password') {
      setPassVerifed(event.target.value.length > 6);
    }
  };

  const setIsShowed = () => {
    setisMotDePasseOublie(!isMotDePasseOublie);
  };

 const SignInUser = async () => {
   setIsLoading(!isLoading);

    setTimeout(async () => {
        try {
            const response = await Login();
             setIsAuthenticated(true);

            if (response) {
                navigate('/dashboard');

                Auth.setUser({
                    nom: 'nom',
                    prenom: 'prenom',
                    email: 'email',
                });
            }
        } catch (error) {
            console.log(error);
        }
    }, 2000);
};


  return (
    <div className="bg-[#E8E4D9] h-full  md:border-r border-red-700 shadow-2xl  lg:shadow-none  lg:rounded-bl-xl lg:rounded-tl-xl connect">
      {isMotDePasseOublie ? (
        <ResetPassowrdEmailModal
          isShowed={isMotDePasseOublie}
          setisShowed={setIsShowed}
        />
      ) : null}
      {isLoading ? <Loading loading={true} /> : null}
      <div className="flex justify-center  items-center">
        <div className=" flex-1">
          <div className="mx-auto ">
            <div className="px-5 h-4/12">
              <h1 className="text-3xl font-bold text-[#6D625C]">Connexion</h1>
              <div className="mt-10">
                <div className="relative ">
                  <input
                    id="signin-email"
                    name="email"
                    type="text"
                    value={user.email}
                    onChange={handleInputChange}
                    className={`shadow  rounded w-full py-2 px-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                      user.email === ''
                        ? 'border-gray-500 border-2'
                        : EmailVerifed === false
                        ? 'border-red-500 border-2'
                        : 'border-green-500 border-2'

                      // EmailVerifed === false
                      //   ? 'border-red-500 border-2'
                      //   : 'border-green-500 border-2'
                    }`}
                    placeholder="E-mail"
                  />
                </div>
                <div>
                  <input
                    id="signin-password"
                    name="password"
                    type="password"
                    value={user.password}
                    onChange={handleInputChange}
                    className={`shadow  rounded w-full py-2 px-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                      user.password === ''
                        ? 'border-gray-500 border-2'
                        : passVerifed === false
                        ? 'border-red-500 border-2'
                        : 'border-green-500 border-2'
                        
                      // passVerifed === false
                      //   ? 'border-red-500 border-2'
                      //   : 'border-green-500 border-2'
                    }`}
                    placeholder="Mot de passe"
                  />
                </div>

                <div className="mt-5">
                  <button
                    className="text-[#6D625C] hover:underline hover:cursor-pointer text-base"
                    onClick={() => setIsShowed()}
                  >
                    Mot du passe oublié
                  </button>
                </div>

                <div className="buttonConnexion mt-5 relative bottom-0 ">
                  <button
                    // className="bg-[#6D625C] hover:bg-[#6D625C] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    className="  w-full px-8 py-2 uppercase 
                    rounded-full bg-green-600 text-white font-semibold text-center block hover:bg-green-500 focus:ring-opacity-80 cursor-pointer"
                    type="button"
                    onClick={() => SignInUser()}
                  >
                    Connexion
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


export default Login;