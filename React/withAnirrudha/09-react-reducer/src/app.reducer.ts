export interface User {}

export interface AppState {
	isLoading: boolean;
	data: User[];
	errorMessage: string;
}

export type AppAction =
	| {
			type: "FETCH_USERS_PENDING";
	  }
	| {
			type: "FETCH_USERS_SUCCESS";
			data: User[];
	  }
	| { type: "FETCH_USERS_FAILED"; message: string };

export const appReducer = (currentState: AppState, action: AppAction): AppState => {
	const state = { ...currentState };

	switch (action.type) {
		case "FETCH_USERS_PENDING":
			state.isLoading = true;
			break;
		case "FETCH_USERS_SUCCESS":
			state.isLoading = false;
			state.data = action.data;
			break;
		case "FETCH_USERS_FAILED":
			state.isLoading = false;
			state.data = [];
			state.errorMessage = action.message;
			break;
	}

	return state;
};
