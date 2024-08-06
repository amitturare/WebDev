import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import "./App.css";

function App() {
	const expenses = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: "e2",
			title: "New TV",
			amount: 799.49,
			date: new Date(2021, 2, 12),
		},
	];

	const addDataHandler = (expenseData: any) => {
		console.log(expenseData);
	};

	return (
		<>
			<NewExpense onAddExpenseData={addDataHandler} />
			<Expenses expenses={expenses} />
		</>
	);
}

export default App;
