import { TextField as MuiTextField } from "@mui/material";
import { forwardRef } from "react";
import { TextFieldProps } from "./TextField.types";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	({ type = "text", required = true, disabled = false, ...rest }, ref) => {
		return <MuiTextField fullWidth type={type} required={required} disabled={disabled} inputRef={ref} {...rest} />;
	}
);

export default TextField;
