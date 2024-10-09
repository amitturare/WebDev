import { useState } from "react";
import { Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../pages/Login/auth.context";

import IconButton from "../IconButton/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

import { HeaderProps } from "./Header.types";
import styles from "./Header.module.scss";

const Header = ({}: HeaderProps) => {
	const { handleLogout } = useAuthContext();
	const navigate = useNavigate();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogoutClick = async () => {
		try {
			const authToken = localStorage.getItem("authToken") as string;
			await handleLogout(authToken);
			navigate("/login");
		} catch (error) {
			console.error("Logout Failed:", error);
		}
	};

	return (
		<header className={styles.Header}>
			<h1>Restaurant Review Management</h1>

			<IconButton onClick={handleMenuClick}>
				<img
					className={styles.profile}
					src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
					alt="profile image"
					height={60}
				></img>
			</IconButton>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem>
					<ListItemIcon>
						<PersonIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText>Profile</ListItemText>
				</MenuItem>

				<MenuItem onClick={handleLogoutClick}>
					<ListItemIcon>
						<LogoutIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText>Logout</ListItemText>
				</MenuItem>
			</Menu>
		</header>
	);
};

export default Header;
