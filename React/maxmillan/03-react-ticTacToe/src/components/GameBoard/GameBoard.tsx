import { GameBoardProps } from "./GameBoard.types";

const GameBoard = ({ onSelectSquare, gameBoard }: GameBoardProps) => {
	return (
		<ol id="game-board">
			{gameBoard.map((row, rowI) => (
				<li key={rowI}>
					<ol>
						{row.map((playerSymbol, colI) => (
							<li key={colI}>
								<button
									onClick={() => onSelectSquare(rowI, colI)}
									disabled={playerSymbol != null ? true : false}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
};

export default GameBoard;
