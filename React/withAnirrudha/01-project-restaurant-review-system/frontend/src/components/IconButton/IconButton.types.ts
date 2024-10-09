import { MouseEvent, PropsWithChildren } from "react";
import { IconButtonOwnProps } from "@mui/material";

export interface IconButtonProps extends IconButtonOwnProps, PropsWithChildren {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
