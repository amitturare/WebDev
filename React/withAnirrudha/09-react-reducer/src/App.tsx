import { useEffect, useReducer } from "react";
import "./App.css";
import { appReducer } from "./app.reducer";

function App() {
	const [appState, dispatch] = useReducer(appReducer, { isLoading: false, data: [], errorMessage: "" });

	useEffect(() => {
		setTimeout(() => {
			dispatch({ type: "FETCH_USERS_PENDING" });
		}, 3000);
	}, []);

	return <>{appState.isLoading ? "Loading" : "NOT Loading"}</>;
}

export default App;
