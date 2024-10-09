import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8081/",
	headers: {
		"ngrok-skip-browser-warning": "skip-browser-warning",
	},
});

axiosInstance.interceptors.request.use((request) => {
	if (!request.headers["authorization"]) {
		request.headers["authorization"] = `Bearer ${localStorage.getItem("authToken")}`;
	}
	return request;
});

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response && ![200, 201].includes(error.response.status)) {
			toast.error("Error, Try Again!");
		}
	}
);

export default axiosInstance;
