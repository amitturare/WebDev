import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import "./App.css";
import { useState } from "react";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2024, 7, 14),
	},
	{
		id: "e2",
		title: "New TV",
		amount: 799.49,
		date: new Date(2023, 2, 12),
	},
];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addDataHandler = (expenseData: any) => {
		setExpenses((prevState) => [expenseData, ...prevState]);
	};

	return (
		<>
			<NewExpense onAddExpenseData={addDataHandler} />
			<Expenses expenses={expenses} />
		</>
	);
}

export default App;
