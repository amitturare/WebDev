import { axiosInstance } from "../utils/axios.instance";

const getUsers = async () => {
	try {
		const { data } = await axiosInstance.get("/users");
		return data;
	} catch (e) {
		console.log(e);
	}
};

const userService = { getUsers };

export default userService;
