import { REST_ACTIONS } from "../../common/constants/dispatch-actions";

export interface IRestaurant {
	_id: string;
	name: string;
	address: string;
	description: string;
	image: string;
	ratings: any[];
	averageRating: number;
	createdAt: string;
	updatedAt: string;
}

export interface IRestaurantLoaderData {
	restaurants: IRestaurant[];
	currentPage: number;
	totalPages: number;
	hasNextPage: boolean;
	searchString: string;
}

export interface IRestaurantState {
	restaurants: IRestaurant[];
	currentPage: number;
	limit: number;
	totalPages: number;
	hasNextPage: boolean;
	searchString: string;
	errorMessage: string;
	isLoading: boolean;
}

export type IRestaurantAction =
	| { type: REST_ACTIONS.DATA_RETRIEVAL_SUCCESS; data: IRestaurantLoaderData }
	| { type: REST_ACTIONS.DATA_RETRIEVAL_FAILED; data: { message: string } };
