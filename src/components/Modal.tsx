import React from "react";
import Image from "next/image";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-3xl border border-line bg-white p-6 text-center shadow-soft">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition hover:border-red-200 hover:text-red-600"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Image
            src={modalSuccess ? "/check.gif" : "/warning.gif"}
            height={112}
            width={112}
            alt={modalSuccess ? "Success" : "Error"}
            unoptimized
          />
          <p className="font-display text-base font-medium text-ink">
            {modalMessage}
          </p>
          <button onClick={onClose} className="btn-primary w-full !py-3">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
