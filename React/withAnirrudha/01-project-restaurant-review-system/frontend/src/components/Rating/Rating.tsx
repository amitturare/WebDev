import { Box as MuiBox, Rating as MuiRating } from "@mui/material";

import StarIcon from "@mui/icons-material/Star";

import { RatingProps } from "./Rating.types";

const Rating = ({ value, readOnly }: RatingProps) => {
	return (
		<MuiBox sx={{ width: 200, display: "flex", alignItems: "center" }}>
			<MuiRating
				name="read-only"
				value={value}
				precision={0.5}
				emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
				readOnly={readOnly}
			/>
		</MuiBox>
	);
};

export default Rating;
