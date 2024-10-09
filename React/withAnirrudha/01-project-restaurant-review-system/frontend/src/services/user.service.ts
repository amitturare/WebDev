import axiosInstance from "./axios.instance";

const getUsers = async (page?: number, limit?: number, searchString?: string) => {
	try {
		const response = await axiosInstance.get(
			`/get-all-users?page=${page}&limit=${limit}&search=${searchString}`
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

const getUserById = async (userId: string) => {
	try {
		const response = await axiosInstance.get(`${userId}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

const userService = { getUsers, getUserById };
export default userService;
