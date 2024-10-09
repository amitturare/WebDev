import { useRootContext } from "../root/root.context";

import { IRootState } from "../root/root.types";

export const useSelector = <TSelected>(selector: (state: IRootState) => TSelected): TSelected => {
	const { state } = useRootContext();
	return selector(state);
};

/**
 * Doubts,
 * 1. root level isLoading and errorMessage handler
 * 2. root level retrieve_data_success & retrieve_data_failed
 * 3. useSelector & useDispatch??
 * 4. how to directly using state and dispatch with withRestaurantDispatch
 * 5. will this one global context cause multiple re-renders
 * 6.
 */
