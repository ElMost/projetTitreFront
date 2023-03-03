import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../context/Auth';
import { Iloading } from '../../../interfaces/Iloading';
import { IshowModalComponentModif } from '../../../interfaces/IShowModalComponentModif';
import { DeleteUser } from '../../../services/auth/AuthApi';
// import { DeleteUser } from '../../../services/auth/auth/AuthApi';
import { AuthContext } from '../../context/Auth';
// import { IshowModalComponentRevision } from '../../../interfaces/IshowModalComponentRevision';
// import { DeleteUser } from '../../../services/Auth/AuthApi';

export const DeleteAccount: React.FC<IshowModalComponentModif> = ({
  isShowed,
}: IshowModalComponentModif) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  const Auth = useContext(AuthContext);

  const DeleteAccountFunction = async () => {
    const email = Auth.user.email;
    const res = DeleteUser({
      email,
    });
    Auth.setIsAuthenticated(false);
    navigate('/login');
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
                  <h3 className="text-xl font-semibold">
                    Suppresion du compte
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => isShowed()}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <p className="my-1 text-slate-500 text-lg leading-relaxed">
                    Vous êtes sûr de vouloir supprimer votre compte
                  </p>
                </div>
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
                    onClick={() => DeleteAccountFunction()}
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
