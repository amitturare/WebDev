import { PropsWithChildren } from "react";

export interface ITabButtonProps extends PropsWithChildren {
	onSelect: () => void;
	isSelected: boolean;
}
