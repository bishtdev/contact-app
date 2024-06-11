import React from "react";
import {createPortal} from 'react-dom'
import { IoCloseCircleOutline } from "react-icons/io5";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal (
    <>
      {isOpen && (
        <div 
        className="absolute top-0 z-5 h-screen w-screen backdrop-blur">
        <div className=" m-auto top-[10rem] relative z-10 min-h-[200px] max-w-[380px] bg-white p-2">
          
          <div className="flex justify-end ">
            <IoCloseCircleOutline
              onClick={onClose}
              className="text-3xl cursor-pointer "
            />
          </div>
          {children}
        </div>
        </div>
      )}
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
