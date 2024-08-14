import { axiosInstance } from "../utils/axios.instance";

const getEmployees = async () => {
	try {
		const { data } = await axiosInstance.get("/users");
		return data;
	} catch (e) {
		console.log(e);
	}
};

const addEmployee = async (data: { name: string; age: number }) => {
	try {
		const result = await axiosInstance.post("/users", data);
		if (result.status === 200) return { message: "Data added to DB" };
	} catch (e) {
		console.log(e);
	}
};

const employeeService = { getEmployees, addEmployee };

export default employeeService;
