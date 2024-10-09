import { ROLES } from "../../common/constants";
import { Card as MuiCard } from "@mui/material";
import { CardActions as MuiCardActions } from "@mui/material";
import { CardContent as MuiCardContent } from "@mui/material";
import { CardMedia as MuiCardMedia } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

import IconButton from "../IconButton/IconButton";
import Rating from "../Rating/Rating";

import { useAuthContext } from "../../pages/Login/auth.context";

import { RestaurantCardProps } from "./RestaurantCard.types";
import styles from "./RestaurantCard.module.scss";

const RestaurantCard = ({ imageUrl, title, ratingValue }: RestaurantCardProps) => {
	const { userRole } = useAuthContext();

	return (
		<MuiCard sx={{ maxWidth: 320 }}>
			<MuiCardMedia sx={{ height: 120 }} image={imageUrl} title={title} />

			<MuiCardContent sx={{ height: 50 }}>
				<h5>{title}</h5>
			</MuiCardContent>

			<div className={styles.CardActions}>
				<MuiCardActions>
					<Rating value={ratingValue} readOnly={userRole === ROLES.ADMIN} />
				</MuiCardActions>

				{userRole === ROLES.ADMIN && (
					<MuiCardActions>
						<IconButton size="small">
							<EditIcon />
						</IconButton>
					</MuiCardActions>
				)}
			</div>
		</MuiCard>
	);
};

export default RestaurantCard;
