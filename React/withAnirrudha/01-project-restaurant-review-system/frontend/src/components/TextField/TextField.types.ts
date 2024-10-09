import { StandardTextFieldProps } from "@mui/material";

export interface TextFieldProps extends StandardTextFieldProps {
	id: string;
	label: string;
	type?: string;
	required?: boolean;
	disabled?: boolean;
}
