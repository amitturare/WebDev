import { IAuthAction, IAuthState } from "./auth.types";
import { AUTH_ACTIONS } from "../../common/constants/dispatch-actions";

export const authReducer = (state: IAuthState, action: IAuthAction): IAuthState => {
	switch (action.type) {
		case AUTH_ACTIONS.AUTH_INIT:
			return {
				...state,
				userRole: action.data.role,
				userData: action.data.userData,
				isAuthenticated: action.data.isAuthenticated,
				isLoading: false,
			};

		case AUTH_ACTIONS.HANDLE_LOADER:
			return {
				...state,
				isLoading: false,
			};

		case AUTH_ACTIONS.REGISTER_SUCCESS:
			return { ...state, isLoading: false };

		case AUTH_ACTIONS.AUTH_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				userRole: action.data.role,
				userData: action.data.userData,
				isLoading: false,
			};

		case AUTH_ACTIONS.AUTH_FAILED:
			return {
				...state,
				isLoading: false,
				errorMessage: action.data.message,
			};

		case AUTH_ACTIONS.SIGN_OUT:
			return {
				...state,
				userRole: null,
				userData: null,
				isLoading: false,
				isAuthenticated: false,
			};

		default:
			return state;
	}
};
