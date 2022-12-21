import React from "react";
import { Modal as MuiModal } from "@mui/material";
import ReactProps from "../../interfaces/react-props/ReactProps";
import { getClasses, getStyles } from "../../utils/getProps";

const Modal: React.FC<ReactProps> = ({ className, style, children }) => {
  return (
    <Modal>
      <div className={`${getClasses(className)}`} style={getStyles(style)}>
        {children}
      </div>
    </Modal>
  );
};

export default Modal;
