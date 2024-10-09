import { LogProps } from "./Log.types";

const Log = ({ turns }: LogProps) => {
	return (
		<ol id="log">
			{turns.map(({ player, square: { row, col } }) => (
				<li key={`${row}*${col}`}>
					{player} selected {row}, {col}
				</li>
			))}
		</ol>
	);
};

export default Log;
