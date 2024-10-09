import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "../../common/hooks";
import { ROUTER } from "../../common/constants";

import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import EntityCards from "../EntityCards/EntityCards";

import { initialRestaurantState, withRestaurantDispatch } from "./Restaurant.reducer";

const Restaurant = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { restaurants, currentPage, totalPages, searchString } = useSelector((state) => state.restaurant);

	useEffect(() => {
		const page = initialRestaurantState.currentPage;
		const searchString = initialRestaurantState.searchString;

		withRestaurantDispatch(dispatch).getRestaurants(page, searchString);
	}, []);

	const handlePageChange = useCallback(
		(page: number) => {
			withRestaurantDispatch(dispatch).getRestaurants(page, searchString);
			navigate(`/restaurants?page=${page}`);
		},
		[dispatch, navigate, searchString]
	);

	const handleSearch = useCallback(
		(searchString: string) => {
			withRestaurantDispatch(dispatch).getRestaurants(1, searchString);
			navigate("/restaurants?page=1");
		},
		[dispatch]
	);

	return (
		<EntityCards
			onSearch={handleSearch}
			currentPage={currentPage}
			totalPages={totalPages}
			onPageChange={handlePageChange}
			baseUrl={ROUTER.GET_RESTAURANTS_PATH}
		>
			{restaurants.map(({ _id, name, image, averageRating }) => (
				<RestaurantCard key={_id} title={name} imageUrl={image} ratingValue={averageRating} />
			))}
		</EntityCards>
	);
};

export default Restaurant;
