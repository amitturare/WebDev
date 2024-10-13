import { ButtonOwnProps } from "@mui/material";
import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren, ButtonOwnProps {
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
  onClickHandler?: () => void;
}
