import { IconButton as MuiIconButton } from "@mui/material";
import { IconButtonProps } from "./IconButton.types";

const IconButton = ({ children, ...rest }: IconButtonProps) => {
	return <MuiIconButton {...rest}>{children}</MuiIconButton>;
};

export default IconButton;
