import { REST_ACTIONS, USER_ACTIONS } from "../constants/dispatch-actions";

import { initialRestaurantState, restaurantReducer } from "../../pages/Restaurant/Restaurant.reducer";
import { IRestaurantAction } from "../../pages/Restaurant/Restaurant.types";

import { initialUserState, userReducer } from "../../pages/User/User.reducer";
import { IUserAction } from "../../pages/User/User.types";

import { IRootAction, IRootState } from "./root.types";

export const initialRootState: IRootState = {
	restaurant: initialRestaurantState,
	user: initialUserState,
};

const isRestaurantAction = (action: IRootAction): action is IRestaurantAction => {
	return action.type.startsWith(REST_ACTIONS.BASE);
};

const isUserAction = (action: IRootAction): action is IUserAction => {
	return action.type.startsWith(USER_ACTIONS.BASE);
};

export const rootReducer = (state: IRootState, action: IRootAction) => {
	return {
		restaurant: isRestaurantAction(action) ? restaurantReducer(state.restaurant, action) : state.restaurant,
		user: isUserAction(action) ? userReducer(state.user, action) : state.user,
	};
};
