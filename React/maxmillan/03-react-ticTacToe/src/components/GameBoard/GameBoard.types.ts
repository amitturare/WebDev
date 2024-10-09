import { IGameBoard } from "../../layout/Layout.types";

export interface GameBoardProps {
	onSelectSquare: (rowI: number, colI: number) => void;
	gameBoard: IGameBoard;
}
