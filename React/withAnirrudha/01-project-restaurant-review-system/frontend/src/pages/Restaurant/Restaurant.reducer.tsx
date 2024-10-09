import { Dispatch } from "react";

import { IRestaurantAction, IRestaurantState } from "./Restaurant.types";
import { IRootAction } from "../../common/root/root.types";
import { REST_ACTIONS } from "../../common/constants/dispatch-actions";
import restaurantService from "../../services/restaurant.service";

export const initialRestaurantState: IRestaurantState = {
	restaurants: [],
	currentPage: 1,
	limit: 8,
	totalPages: 1,
	hasNextPage: false,
	searchString: "",
	errorMessage: "",
	isLoading: true,
};

export const restaurantReducer = (state: IRestaurantState, action: IRestaurantAction): IRestaurantState => {
	switch (action.type) {
		case REST_ACTIONS.DATA_RETRIEVAL_SUCCESS:
			return {
				...state,
				restaurants: action.data.restaurants,
				currentPage: action.data.currentPage,
				totalPages: action.data.totalPages,
				hasNextPage: action.data.hasNextPage,
				searchString: action.data.searchString || "",
				isLoading: false,
			};

		case REST_ACTIONS.DATA_RETRIEVAL_FAILED:
			return {
				...state,
				errorMessage: action.data.message,
				isLoading: false,
			};

		default:
			return state;
	}
};

export const withRestaurantDispatch = (dispatch: Dispatch<IRootAction>) => ({
	getRestaurants: async (page: number, searchString: string) => {
		try {
			const data = await restaurantService.getAllRestaurants(page, initialRestaurantState.limit, searchString);
			dispatch({ type: REST_ACTIONS.DATA_RETRIEVAL_SUCCESS, data: { ...data } });
		} catch (error: any) {
			dispatch({
				type: REST_ACTIONS.DATA_RETRIEVAL_FAILED,
				data: { message: error.message || "Failed to fetch restaurants." },
			});
			console.error("Failed to fetch data:", error);
		}
	},
});
