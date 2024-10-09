import styles from "./TabButton.module.scss";
import { ITabButtonProps } from "./TabButton.types";

const TabButton = ({ children, onSelect, isSelected }: ITabButtonProps) => {
	const { Button } = styles;

	return (
		<li>
			<button className={`${Button} ${isSelected ? "active" : ""}`} onClick={onSelect}>
				{children}
			</button>
		</li>
	);
};

export default TabButton;
