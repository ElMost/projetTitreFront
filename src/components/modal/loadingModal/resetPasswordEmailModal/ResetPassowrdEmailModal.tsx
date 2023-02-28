import React, { useState } from 'react';
import { IModalComponent } from '../../../../interfaces/IModalComponent';

const ResetPassowrdEmailModal: React.FC<IModalComponent> = ({
  isShowed,
  setisShowed,
}: IModalComponent) => {
  const [showModal, setShowModal] = useState(isShowed);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Reset Password</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setisShowed()}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-gray-600 text-lg leading-relaxed">
                    Entrez votre email pour recevoir un lien de réinitialisation
                    de mot de passe.
                  </p>
                </div>

                <div className="flex justify-center items-center  mb-4 w-full">
                  <input
                    className="w-10/12 focus:outline-none   border-gray-200 border-2 p-2 "
                    type="email"
                    placeholder="E-mail"
                  />
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

export default ResetPassowrdEmailModal;
