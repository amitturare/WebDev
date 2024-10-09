import axiosInstance from "./axios.instance";

import { IUserLogin, IUserRegister } from "../pages/Login/auth.types";

const signIn = async (data: IUserLogin) => {
	try {
		const {
			data: { authToken, user },
		} = await axiosInstance.post("login", data);
		return { authToken, role: user.role, user };
	} catch (error) {
		throw error;
	}
};

const signUp = async (data: IUserRegister) => {
	try {
		const response = await axiosInstance.post("signup", data);
		return response.data.user;
	} catch (error) {
		throw error;
	}
};

const signOut = async (authToken: string) => {
	try {
		const response = await axiosInstance.post("logout", { authToken });
		return response.data;
	} catch (error) {
		throw error;
	}
};

const authService = { signIn, signUp, signOut };
export default authService;
