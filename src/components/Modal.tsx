import React from "react";
import Image from "next/image";

// Define Props Type
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalSuccess: boolean;
  modalMessage: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  modalSuccess,
  modalMessage,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg p-5 w-11/12 max-w-sm text-center">
         
          <button onClick={onClose} className="flex justify-end w-full">
            <Image src="/close.png" height={20} width={20} alt="close" />
          </button>

          
          <div className="flex flex-col items-center justify-center space-x-2">
            {modalSuccess ? (
              <Image src="/check.gif" height={120} width={120} alt="check" />
            ) : (
              <Image src="/warning.gif" height={120} width={120} alt="warning" />
            )}
            <h2
              className={`text-sm ${
                modalSuccess ? "text-green-600" : "text-red-600"
              }`}
            >
              {modalMessage}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
