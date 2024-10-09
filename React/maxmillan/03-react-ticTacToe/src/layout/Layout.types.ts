export interface IGameTurn {
	player: "X" | "O";
	square: { row: number; col: number };
}

export type IGameBoard = Array<Array<null | "X" | "O">>;
