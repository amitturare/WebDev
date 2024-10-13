import { toast } from "react-toastify";
import { createContext, FC, useReducer, useContext, useEffect } from "react";
import { ROLES } from "../../common/constants";
import { AUTH_ACTIONS } from "../../common/constants/dispatch-actions";

import BackdropLoader from "../../components/BackdropLoader/BackdropLoader";

import authService from "../../services/auth.service";
import userService from "../../services/user.service";

import { authReducer } from "./auth.reducer";
import { AuthProviderProps, IAuthContext, IUserLogin, IUserRegister, IAuthState } from "./auth.types";

const initialAuthState: IAuthState = {
	userRole: null,
	userData: null,
	isLoading: true,
	isAuthenticated: false,
	errorMessage: "",
};

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialAuthState);

	useEffect(() => {
		const fetchUserData = async () => {
			const storedAuthToken = localStorage.getItem("authToken");
			const storedUserId = localStorage.getItem("userId") as string;

			if (storedAuthToken) {
				try {
					const userData = await userService.getUserById(storedUserId);
					if (userData) {
						dispatch({
							type: AUTH_ACTIONS.AUTH_INIT,
							data: { role: userData.role as ROLES, userData, isAuthenticated: true },
						});
					}
				} catch (error) {
					dispatch({ type: AUTH_ACTIONS.AUTH_FAILED, data: { message: "Failed to fetch user data" } });
				}
			} else {
				dispatch({ type: AUTH_ACTIONS.HANDLE_LOADER });
			}
		};

		fetchUserData();
	}, []);

	const handleRegister = async (data: IUserRegister) => {
		try {
			const response = await authService.signUp(data);
			if (response?.role) {
				dispatch({ type: AUTH_ACTIONS.REGISTER_SUCCESS });
				toast.success(`Successfully Registered as a New ${response.role}`);
			}
		} catch (error) {
			dispatch({ type: AUTH_ACTIONS.AUTH_FAILED, data: { message: "Registration failed" } });
			toast.error("Failed to register. Try Again!");
		}
	};

	const handleGoogleLogin = async (credential: string) => {
		try {
			const response = await authService.googleLogIn(credential);

			if (response?.role && response?.authToken) {
				localStorage.setItem("userRole", response.role);
				localStorage.setItem("userId", response.user._id);
				localStorage.setItem("authToken", response.authToken);

				dispatch({ type: AUTH_ACTIONS.AUTH_SUCCESS, data: { role: response.role, userData: response.user } });
				toast.success("Successfully Logged In");
			}
		} catch (error) {
			dispatch({ type: AUTH_ACTIONS.AUTH_FAILED, data: { message: "Login failed" } });
			toast.error("Failed to log you in. Try Again!");
		}
	};

	const handleLogin = async (data: IUserLogin) => {
		try {
			const response = await authService.signIn(data);

			if (response?.role && response?.authToken) {
				localStorage.setItem("userRole", response.role);
				localStorage.setItem("userId", response.user._id);
				localStorage.setItem("authToken", response.authToken);

				dispatch({ type: AUTH_ACTIONS.AUTH_SUCCESS, data: { role: response.role, userData: response.user } });
				toast.success("Successfully Logged In");
			}
		} catch (error) {
			dispatch({ type: AUTH_ACTIONS.AUTH_FAILED, data: { message: "Login failed" } });
			toast.error("Failed to log you in. Try Again!");
		}
	};

	const handleLogout = async (authToken: string) => {
		try {
			const response = await authService.signOut(authToken);
			if (response) {
				localStorage.removeItem("userRole");
				localStorage.removeItem("userId");
				localStorage.removeItem("authToken");

				dispatch({ type: AUTH_ACTIONS.SIGN_OUT });
				toast.success("Successfully Logged Out");
			}
		} catch (error) {
			dispatch({ type: AUTH_ACTIONS.AUTH_FAILED, data: { message: "Logout failed" } });
			toast.error("Failed to log you out. Try Again!");
		}
	};

	if (state.isLoading) return <BackdropLoader />;

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				userRole: state.userRole,
				userData: state.userData,
				isLoading: state.isLoading,
				errorMessage: state.errorMessage,
				handleGoogleLogin,
				handleLogin,
				handleLogout,
				handleRegister,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = (): IAuthContext => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuthContext must be used within an AuthProvider");
	}
	return context;
};
