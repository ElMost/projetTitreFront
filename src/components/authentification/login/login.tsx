/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../services/auth/AuthApi';
// import { login } from '../../../services/auth/AuthApi';
import { AuthContext } from '../../context/Auth';
import { Loading } from '../../modal/loadingModal/Loading';
import ResetPassowrdEmailModal from '../../modal/loadingModal/resetPasswordEmailModal/ResetPassowrdEmailModal';
import './Login.css';

// import { LoginFunction } from '../../../services/auth/auth/AuthApi';

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
      const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      setPassVerifed(re.test(event.target.value));
    }

    console.log(passVerifed);
  };

  const SignInUser = async () => {
    if (!EmailVerifed) {
      alert('Email non valide');
      return 0;
    }
    if (!passVerifed) {
      alert('Mot de passe non valide');
      return 0;
    }
    setIsLoading(!isLoading);

    setTimeout(async () => {
      try {
        const response = await login(user);
        console.log(response);

        setIsAuthenticated(false);

        if (response) {
          navigate('/dashboard');
          setIsAuthenticated(true);
        }
      } catch (error) {
        Auth.setUser({
          email: user.email,
          nom: '',
          prenom: '',
        });
      }
    }, 2000);
  };

  const setIsShowed = () => {
    setisMotDePasseOublie(!isMotDePasseOublie);
  };

//   return (
//     <div className="bg-[#E8E4D9] h-full  md:border-r border-red-700 shadow-2xl  lg:shadow-none  lg:rounded-bl-xl lg:rounded-tl-xl connect">
//       {isLoading ? <Loading loading={true} /> : null}

//       {isMotDePasseOublie ? (
//         <ResetPassowrdEmailModal
//           isShowed={isMotDePasseOublie}
//           setisShowed={function (): boolean {
//             throw new Error('Function not implemented.');
//           }}
//         />
//       ) : null}
//       {isLoading ? <Loading loading={true} /> : null}
//       <div className="flex justify-center  items-center">
//         <div className=" w-full flex-1">
//           <div className="w-full mx-auto overflow-hidden">
//             <div className="px-5 h-10/12">
//               <h1 className="text-3xl font-bold text-[#6D625C]">Connexion</h1>
//               <div className="relative  mt-20">
//                 <input
//                   id="signin-email"
//                   name="email"
//                   type="text"
//                   value={user.email}
//                   onChange={handleInputChange}
//                   className={`shadow  rounded w-full py-2 px-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
//                     user.email === ''
//                       ? 'border-gray-500 border-2'
//                       : EmailVerifed === false
//                       ? 'border-red-500 border-2'
//                       : 'border-green-500 border-2'
//                   }`}
//                   placeholder="Email"
//                 />
//                 <label
//                   htmlFor="signin-email"
//                   className="absolute top-0 left-0 -mt-2 pt-2 px-3 text-gray-500 text-xs"
//                 >
//                   Email
//                 </label>
//               </div>
//               <div className="relative ">
//                 <input
//                   id="signin-password"
//                   name="password"
//                   type="password"
//                   value={user.password}
//                   onChange={handleInputChange}
//                   className={`shadow  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
//                     passVerifed ? 'border-green-500' : 'border-red-500'
//                   }`}
//                   placeholder="Mot de passe"
//                 />
//                 <label
//                   htmlFor="signin-password"
//                   className="absolute top-0 left-0 -mt-2 pt-2 px-3 text-gray-500 text-xs"
//                 >
//                   Mot de passe
//                 </label>
//               </div>
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center">
//                   <input
//                     id="remember-me"
//                     type="checkbox"
//                     className="shadow  rounded w-4 h-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                   <label
//                     htmlFor="remember-me"
//                     className="ml-2 text-sm text-gray-600"
//                   >
//                     Se souvenir de moi
//                   </label>
//                 </div>
//                 <div className="text-sm text-gray-600">
//                   <button
//                     onClick={setIsShowed}
//                     className="focus:outline-none text-sm text-gray-600"
//                   >
//                     Mot de passe oublié ?
//                   </button>
//                 </div>
//               </div>
//               <div className="mt-10">
//                 <button
//                   onClick={SignInUser}
//                   className="bg-[#6D625C] text-white w-full py-2 px-3 rounded focus:outline-none focus:shadow-outline"
//                 >
//                   Se connecter
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



//   const setIsShowed = () => {
//     setisMotDePasseOublie(!isMotDePasseOublie);
//   };

//   const SignInUser = async () => {
//  if (!EmailVerifed) {
//    alert('Email non valide');
//    return 0;
//   }
//  if (!passVerifed) {
//    alert('Mot de passe non valide');
//    return 0;
//  }
//  setIsLoading(!isLoading);
    
//   };

  // setTimeout(async () => {
  //   try {
  //     const response = await login(user);
  //     console.log(response);

  //     setIsAuthenticated(false);

  //     if (response) {
  //       navigate('/dashboard');
  //       setIsAuthenticated(true);
  //     }
  //   } catch (error) {
  //     Auth.setUser({
  //       email: user.email,
  //       nom: '',
  //       prenom: '',
  //     });
  //   }
  // }, 2000);

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
                    rounded bg-green-600 text-white font-semibold text-center block hover:bg-green-500 focus:ring-opacity-80 cursor-pointer"
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
