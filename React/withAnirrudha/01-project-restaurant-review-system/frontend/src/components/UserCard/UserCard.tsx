import { ROLES } from "../../common/constants";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import { UserCardProps } from "./UserCard.types";
import styles from "./UserCard.module.scss";

const UserCard = ({ name, username, role }: UserCardProps) => {
	return (
		<div className={styles.Container}>
			<div className={styles.ProfileWrapper}>
				<img
					className={styles.ProfileImg}
					src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
					alt="profile image"
					height={60}
				/>
				{role === ROLES.ADMIN && <AdminPanelSettingsIcon className={styles.Icon} />}
			</div>

			<div className={styles.UserInfo}>
				<div>
					<h5>{name}</h5>
					<p>@{username}</p>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
