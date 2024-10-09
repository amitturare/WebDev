import { ChangeEvent, useState } from "react";
import { PlayerProps } from "./Player.types";

const Player = ({ initialName, symbol, isActive, onChangeName }: PlayerProps) => {
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [playerName, setPlayerName] = useState(initialName);

	const handleEditClick = () => {
		setIsEditing((prev) => !prev);

		if (isEditing) {
			onChangeName(symbol, playerName);
		}
	};

	const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPlayerName(event.target.value);
	};

	return (
		<li className={isActive ? "active" : ""}>
			<div className="player">
				{isEditing ? (
					<input type="text" required value={playerName} onChange={handleFieldChange} />
				) : (
					<span className="player-name">{playerName}</span>
				)}
				<span className="player-symbol">{symbol}</span>
			</div>
			<button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
};

export default Player;
