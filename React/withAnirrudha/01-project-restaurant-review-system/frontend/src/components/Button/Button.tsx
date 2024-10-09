import { forwardRef } from "react";
import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant = "contained", type = "button", children, disabled = false, ...rest }, ref) => {
		return (
			<MuiButton variant={variant} type={type} disabled={disabled} ref={ref} {...rest}>
				{children}
			</MuiButton>
		);
	}
);

export default Button;
