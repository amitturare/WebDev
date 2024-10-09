import { Dispatch } from "react";
import { IRestaurantAction, IRestaurantState } from "../../pages/Restaurant/Restaurant.types";
import { IUserAction, IUserState } from "../../pages/User/User.types";

export interface IRootState {
	restaurant: IRestaurantState;
	user: IUserState;
}

export type IRootAction = IRestaurantAction | IUserAction;

export interface IRootContext {
	state: IRootState;
	dispatch: Dispatch<IRootAction>;
}
