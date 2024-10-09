import { PropsWithChildren } from "react";
import { LAYOUT_ACTIONS } from "../../common/constants/dispatch-actions";

import { IUser } from "../Login/auth.types";

export interface IRestaurant {
	name: string;
	address: string;
	description: string;
	image: string;
	rating: string[];
	createdAt: string;
	updatedAt: string;
}

export interface ILayoutState {
	activeTab: string;
	isLoading: boolean;
	users: IUser[];
	restaurants: IRestaurant[];
	errorMessage: string;
}

export type ILayoutAction =
	| { type: LAYOUT_ACTIONS.HANDLE_ACTIVE_TAB; data: { activeTab: string } }
	| { type: LAYOUT_ACTIONS.SET_ROLE_WISE_ACTIVE_TAB; data: { activeTab: string } }
	| { type: LAYOUT_ACTIONS.DATA_RETRIEVAL_FAILED; data: { message: string } };

export interface ILayoutContext extends ILayoutState {
	handleActiveTab: (clickedTab: string) => void;
}

export interface LayoutProviderProps extends PropsWithChildren {}
