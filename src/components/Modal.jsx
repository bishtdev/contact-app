import React from "react";
import {createPortal} from 'react-dom'
import { IoCloseCircleOutline } from "react-icons/io5";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal (
    <>
      {isOpen && (
        <>
        <div className=" m-auto relative z-10 min-h-[200px] max-w-[380px] bg-white p-2">
          
          <div className="flex justify-end ">
            <IoCloseCircleOutline
              onClick={onClose}
              className="text-3xl "
            />
          </div>
        </div>
        <div className="absolute top-0 z-5 h-screen w-screen backdrop-blur" />
        </>
      )}
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
