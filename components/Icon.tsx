import { MdClose as Close } from "react-icons/md";
import { Icon } from "@iconify/react";
import ReactProps from "../interfaces/react-props/ReactProps";
import { getClasses, getStyles } from "../utils/getProps";

interface IconProps extends ReactProps {
  onClick?: React.MouseEventHandler;
}

export const CloseIcon: React.FC<IconProps> = ({
  className,
  style,
  onClick,
}) => (
  <Close
    className={getClasses(className)}
    style={getStyles(style)}
    onClick={onClick}
  />
);

export const WarnIcon: React.FC<IconProps> = ({
  className,
  style,
  onClick,
}) => (
  <Icon
    icon="mdi:warning-circle-outline"
    className={getClasses(className)}
    style={getStyles(style)}
    onClick={onClick}
  />
);

export const SuccessIcon: React.FC<IconProps> = ({
  className,
  style,
  onClick,
}) => (
  <Icon
    icon="charm:circle-tick"
    className={getClasses(className)}
    style={getStyles(style)}
    onClick={onClick}
  />
);
