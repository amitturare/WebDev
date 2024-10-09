import { FC, createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../common/constants";
import { LAYOUT_ACTIONS } from "../../common/constants/dispatch-actions";

import { layoutReducer } from "./Layout.reducer";
import { ILayoutContext, ILayoutState, LayoutProviderProps } from "./Layout.types";
import { useAuthContext } from "../Login/auth.context";

import { UserMenuItems, AdminMenuItems } from "../../components/SideBar/Sidebar.types";

const initialLayoutState: ILayoutState = {
	activeTab: "",
	isLoading: true,
	users: [],
	restaurants: [],
	errorMessage: "",
};

export const LayoutContext = createContext<ILayoutContext | null>(null);

export const LayoutProvider: FC<LayoutProviderProps> = ({ children }) => {
	const navigate = useNavigate();
	const { userRole } = useAuthContext();
	const [state, dispatch] = useReducer(layoutReducer, initialLayoutState);

	useEffect(() => {
		switch (userRole) {
			case ROLES.ADMIN:
				dispatch({ type: LAYOUT_ACTIONS.SET_ROLE_WISE_ACTIVE_TAB, data: { activeTab: AdminMenuItems[0] } });
				navigate("/users?page=1");
				break;

			case ROLES.USER:
				dispatch({ type: LAYOUT_ACTIONS.SET_ROLE_WISE_ACTIVE_TAB, data: { activeTab: UserMenuItems[0] } });
				navigate("/restaurants?page=1");
				break;
		}
	}, []);

	const handleActiveTab = (clickedTab: string) => {
		dispatch({ type: LAYOUT_ACTIONS.HANDLE_ACTIVE_TAB, data: { activeTab: clickedTab } });

		switch (clickedTab) {
			case "Restaurants":
				navigate("/restaurants?page=1");
				break;

			case "Users":
				navigate("/users?page=1");
				break;

			default:
				navigate("/");
				break;
		}
	};

	return (
		<LayoutContext.Provider
			value={{
				activeTab: state.activeTab,
				isLoading: state.isLoading,
				users: state.users,
				restaurants: state.restaurants,
				errorMessage: state.errorMessage,
				handleActiveTab,
			}}
		>
			{children}
		</LayoutContext.Provider>
	);
};

export const useLayoutContext = (): ILayoutContext => {
	const context = useContext(LayoutContext);
	if (!context) {
		throw new Error("React Error: Layout Context");
	}
	return context;
};
