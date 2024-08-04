import { axiosInstance } from "../utils/axios.instance";

const getEmployees = async () => {
	try {
		const { data } = await axiosInstance("/users");
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default {
	getEmployees,
};
