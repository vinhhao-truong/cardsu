import React from "react";
import MuiModal from "@mui/material/Modal";
import ReactProps from "../../interfaces/react-props/ReactProps";
import { getClasses, getStyles } from "../../utils/getProps";
import ModalProps from "../../interfaces/react-props/ModalProps";
import { CloseIcon } from "../Icon";

const ModalHead: React.FC<{
  title?: string | React.ReactNode;
  closeModal: () => void;
}> = ({ title, closeModal }) => {
  return (
    <div
      className={`flex items-center ${
        title ? "justify-between" : "justify-end"
      } px-4 sm:px-6 py-2 border-b border-b-black/30 text-xl font-[500] text-gray-700`}
    >
      {title}
      <CloseIcon
        onClick={closeModal}
        className="text-lg text-red-500 cursor-pointer hover:text-red-600"
      />
    </div>
  );
};

const Modal: React.FC<ModalProps> = ({
  className,
  style,
  children,
  openModal,
  closeModal,
  isOpen,
  title,
  isMobileFullScreen = true,
}) => {
  return (
    //@ts-ignores
    <MuiModal open={isOpen} onClose={closeModal}>
      <div
        className={`${getClasses(className)} bg-white text-black ${
          isMobileFullScreen ? "w-full h-full" : "w-[95vw] rounded"
        } sm:min-w-[30rem] sm:h-max sm:max-h-[60vh] sm:max-w-[95vw] outline-none absolute top-1/2 left-1/2 sm:rounded-lg`}
        style={{ ...getStyles(style), transform: "translate(-50%, -50%)" }}
      >
        {/* HEAD */}
        <ModalHead closeModal={closeModal} title={title} />
        {/* BODY */}
        <div className="px-6 py-3">{children}</div>
      </div>
    </MuiModal>
  );
};

export default Modal;
