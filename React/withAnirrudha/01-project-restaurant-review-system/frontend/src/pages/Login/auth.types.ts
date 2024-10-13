import { PropsWithChildren } from "react";
import { ROLES } from "../../common/constants";
import { AUTH_ACTIONS } from "../../common/constants/dispatch-actions";

export interface IUser {
	_id: string;
	role: string;
	name: string;
	username: string;
	password: string;
	createdAt: string;
	updatedAt: string;
}

export interface IAuthState {
	userRole: ROLES | null;
	userData: IUser | null;
	isLoading: boolean;
	isAuthenticated: boolean;
	errorMessage: string;
}

export type IAuthAction =
	| { type: AUTH_ACTIONS.AUTH_INIT; data: { role: ROLES | null; userData: IUser; isAuthenticated: boolean } }
	| { type: AUTH_ACTIONS.HANDLE_LOADER }
	| { type: AUTH_ACTIONS.REGISTER_SUCCESS }
	| { type: AUTH_ACTIONS.AUTH_SUCCESS; data: { role: ROLES; userData: IUser } }
	| { type: AUTH_ACTIONS.AUTH_FAILED; data: { message: string } }
	| { type: AUTH_ACTIONS.SIGN_OUT };

export interface IAuthContext extends IAuthState {
	handleGoogleLogin: (credential: string) => Promise<{ authToken: string; role: string } | void>;
	handleLogin: (data: { username: string; password: string }) => Promise<{ authToken: string; role: string } | void>;
	handleLogout: (authToken: string) => Promise<void>;
	handleRegister: (data: IUserRegister) => Promise<void>;
}

export interface IUserLogin {
	username: string;
	password: string;
}

export interface IUserRegister extends IUserLogin {
	name: string;
}

export interface AuthProviderProps extends PropsWithChildren {}
