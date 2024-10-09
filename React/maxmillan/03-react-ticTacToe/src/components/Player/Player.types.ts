export interface PlayerProps {
	initialName: string;
	symbol: "X" | "O";
	isActive: boolean;
	onChangeName: (symbol: "X" | "O", newName: string) => void;
}
