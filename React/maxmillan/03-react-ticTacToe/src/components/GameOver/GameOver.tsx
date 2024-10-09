import { GameOverProps } from "./GameOver.types";

const GameOver = ({ winner, onRematchClick }: GameOverProps) => {
	return (
		<div id="game-over">
			<h2>Game Over!</h2>
			{winner && <p>{winner} won!</p>}
			{!winner && <p>It's a draw!</p>}
			<p>
				<button onClick={onRematchClick}>Rematch!</button>
			</p>
		</div>
	);
};

export default GameOver;
