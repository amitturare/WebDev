import axiosInstance from "./axios.instance";

const getAllRestaurants = async (page?: number, limit?: number, searchString?: string) => {
	try {
		const { data } = await axiosInstance.get(
			`/restaurant/get-all?page=${page}&limit=${limit}&search=${searchString}`
		);
		return data;
	} catch (error) {
		throw error;
	}
};

const getRestaurant = async (restaurantId: string) => {
	try {
		const { data } = await axiosInstance.get(`/restaurant/${restaurantId}`);
		return data;
	} catch (error) {
		throw error;
	}
};

const getReviewsByUserId = async (userId: string, page?: number, limit?: number) => {
	try {
		const { data } = await axiosInstance.get(`/rating/user/${userId}?page=${page}&limit=${limit}`);
		return data;
	} catch (error) {
		throw error;
	}
};

const getReviewsByRestaurantId = async (restaurantId: string, page?: number, limit?: number) => {
	try {
		const { data } = await axiosInstance.get(`/rating/restaurant/${restaurantId}?page=${page}&limit=${limit}`);
		return data;
	} catch (error) {
		throw error;
	}
};

const restaurantService = {
	getAllRestaurants,
	getRestaurant,
	getReviewsByUserId,
	getReviewsByRestaurantId,
};
export default restaurantService;
