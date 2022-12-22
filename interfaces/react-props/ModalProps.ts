import ReactProps from "./ReactProps";

export default interface ModalProps extends ReactProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  title?: string | React.ReactNode;
  isMobileFullScreen?: boolean;
}
