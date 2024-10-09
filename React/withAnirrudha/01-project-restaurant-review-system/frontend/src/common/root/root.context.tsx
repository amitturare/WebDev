import { createContext, FC, PropsWithChildren, useContext, useReducer } from "react";

import { initialRootState, rootReducer } from "./root.reducer";
import { IRootContext } from "./root.types";

export const RootContext = createContext<IRootContext | null>(null);

export const RootProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(rootReducer, initialRootState);

	return <RootContext.Provider value={{ state, dispatch }}>{children}</RootContext.Provider>;
};

export const useRootContext = (): IRootContext => {
	const context = useContext(RootContext);
	if (!context) {
		throw new Error("useRootContext must be used within RootProvider");
	}
	return context;
};
