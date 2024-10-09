import { createContext, PropsWithChildren, useContext, useReducer } from "react";
import "./App.css";
import Table from "./components/Table/Table";

const appReducer = (initialState: any, action: any) => {
	switch (action.type) {
		case "SEARCH_DATA":
			const filteredData = action.data.find((item: any) => item.name === action.searchString);
			return { ...initialState, data: filteredData };

		
	}

	return initialState;
};

const AppContext = createContext({ data: [], searchString: "", filter: { name: 1, location: 1, pinCode: 1 } });

const AppProvider = ({ children }: PropsWithChildren) => {
	const [{ data, searchString, filter }, dispatch] = useReducer(appReducer, {
		searchString: "",
		filter: { name: 1, location: 1, pinCode: 1 },
	});

	const getSearchData = () => {
		dispatch({ type: "SEARCH_DATA" });
	};



	return <AppContext.Provider value={{ searchString, filter, data, getSearchData }}>{children}</AppContext.Provider>;
};

function App() {
	const { data, searchString, fitler, getSearchData } = useContext(AppContext);

	return (
		<>
			<input type="text" value={searchString} />
			<Table data={data} />
		</>
	);
}

export default App;
