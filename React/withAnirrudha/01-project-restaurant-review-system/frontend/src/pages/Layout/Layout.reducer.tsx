import { LAYOUT_ACTIONS } from "../../common/constants/dispatch-actions/layout-action.constants";
import { ILayoutAction, ILayoutState } from "./Layout.types";

export const layoutReducer = (state: ILayoutState, action: ILayoutAction): ILayoutState => {
	switch (action.type) {
		case LAYOUT_ACTIONS.HANDLE_ACTIVE_TAB:
			return { ...state, activeTab: action.data.activeTab };

		case LAYOUT_ACTIONS.SET_ROLE_WISE_ACTIVE_TAB:
			return { ...state, activeTab: action.data.activeTab };

		case LAYOUT_ACTIONS.DATA_RETRIEVAL_FAILED:
			return { ...state, errorMessage: action.data.message };

		default:
			return state;
	}
};
