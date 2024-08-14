import { axiosInstance } from "../utils/axios.instance";

const getEmployees = async () => {
	try {
		const { data } = await axiosInstance.get("/users");
		return data;
	} catch (e) {
		console.log(e);
	}
};

const employeeService = { getEmployees };

export default employeeService;
