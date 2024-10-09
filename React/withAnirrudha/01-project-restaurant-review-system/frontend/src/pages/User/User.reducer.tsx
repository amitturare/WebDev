import { Dispatch } from "react";

import { IUserAction, IUserState } from "./User.types";
import { IRootAction } from "../../common/root/root.types";
import { USER_ACTIONS } from "../../common/constants/dispatch-actions";
import userService from "../../services/user.service";

export const initialUserState: IUserState = {
	users: [],
	currentPage: 1,
	limit: 20,
	totalPages: 1,
	hasNextPage: false,
	searchString: "",
	errorMessage: "",
	isLoading: true,
};

export const userReducer = (state: IUserState, action: IUserAction): IUserState => {
	switch (action.type) {
		case USER_ACTIONS.DATA_RETRIEVAL_SUCCESS:
			return {
				...state,
				users: action.data.users,
				currentPage: action.data.currentPage,
				totalPages: action.data.totalPages,
				hasNextPage: action.data.hasNextPage,
				searchString: action.data.searchString || "",
				isLoading: false,
			};

		case USER_ACTIONS.DATA_RETRIEVAL_FAILED:
			return {
				...state,
				errorMessage: action.data.message,
				isLoading: false,
			};

		default:
			return state;
	}
};

export const withUserDispatch = (dispatch: Dispatch<IRootAction>) => ({
	getUsers: async (page: number, searchString: string) => {
		try {
			const data = await userService.getUsers(page, initialUserState.limit, searchString);
			dispatch({ type: USER_ACTIONS.DATA_RETRIEVAL_SUCCESS, data: { ...data } });
		} catch (error: any) {
			dispatch({
				type: USER_ACTIONS.DATA_RETRIEVAL_FAILED,
				data: { message: error.message || "Failed to fetch users." },
			});
			console.error("Failed to fetch data:", error);
		}
	},
});
