import { Dispatch } from "react";

import { useRootContext } from "../root/root.context";
import { IRootAction } from "../root/root.types";

export const useDispatch = (): Dispatch<IRootAction> => {
	const { dispatch } = useRootContext();
	return dispatch;
};
