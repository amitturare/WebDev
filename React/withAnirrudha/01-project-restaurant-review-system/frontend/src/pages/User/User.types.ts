import { USER_ACTIONS } from "../../common/constants/dispatch-actions";
import { IUser } from "../Login/auth.types";

export interface IUserLoaderData {
	_id: string;
	users: IUser[];
	currentPage: number;
	totalPages: number;
	hasNextPage: boolean;
	searchString: string;
}

export interface IUserState {
	users: IUser[];
	currentPage: number;
	limit: number;
	totalPages: number;
	hasNextPage: boolean;
	searchString: string;
	errorMessage: string;
	isLoading: boolean;
}

export type IUserAction =
	| { type: USER_ACTIONS.DATA_RETRIEVAL_SUCCESS; data: IUserLoaderData }
	| { type: USER_ACTIONS.DATA_RETRIEVAL_FAILED; data: { message: string } };
