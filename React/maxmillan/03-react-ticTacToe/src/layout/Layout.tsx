import { useState } from "react";

import Header from "../components/Header/Header";
import Player from "../components/Player/Player";
import GameBoard from "../components/GameBoard/GameBoard";
import Log from "../components/Log/Log";
import GameOver from "../components/GameOver/GameOver";

import { WINNING_COMBINATIONS } from "../winning-combinations";
import { IGameBoard, IGameTurn } from "./Layout.types";

const initialGameBoard: IGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const deriveActivePlayer = (gameTurns: IGameTurn[]) => {
	let currPlayer: "X" | "O" = "X";
	if (gameTurns.length > 0 && gameTurns[0].player === "X") currPlayer = "O";

	return currPlayer;
};

const Layout = () => {
	const [playerNames, setPLayerNames] = useState({
		X: "Player 1",
		O: "Player 2",
	});
	const [gameTurns, setGameTurns] = useState<IGameTurn[]>([]);

	const currPlayer = deriveActivePlayer(gameTurns);

	let gameBoard = [...initialGameBoard.map((arr) => [...arr])];

	for (const turn of gameTurns) {
		const {
			square: { row, col },
			player,
		} = turn;

		gameBoard[row][col] = player;
	}

	let winner = null;
	const hasDraw = gameTurns.length === 9 && !winner;

	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

		if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol)
			winner = playerNames[firstSquareSymbol];
	}

	const handleSelectSquare = (rowI: number, colI: number) => {
		setGameTurns((prev) => [{ player: currPlayer, square: { row: rowI, col: colI } }, ...prev]);
	};

	const handleRematchClick = () => {
		setGameTurns([]);
	};

	const handlePlayerNameChange = (symbol: "X" | "O", newName: string) => {
		setPLayerNames((prev) => ({ ...prev, [symbol]: newName }));
	};

	return (
		<>
			<Header />
			<main>
				<div id="game-container">
					<ol id="players" className="highlight-player">
						<Player
							initialName="Player 1"
							symbol="X"
							isActive={currPlayer === "X"}
							onChangeName={handlePlayerNameChange}
						/>
						<Player
							initialName="Player 2"
							symbol="O"
							isActive={currPlayer === "O"}
							onChangeName={handlePlayerNameChange}
						/>
					</ol>
					{(winner || hasDraw) && <GameOver winner={winner} onRematchClick={handleRematchClick} />}
					<GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
				</div>

				<Log turns={gameTurns} />
			</main>
		</>
	);
};

export default Layout;
