import { useState } from "react";

import { IExpensesProps } from "./Expenses.types";

import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
import ExpenseList from "./ExpenseList/ExpenseList";

import styles from "./Expenses.module.scss";

const Expenses = ({ expenses }: IExpensesProps) => {
	const { expensesContainer } = styles;

	const [filteredYear, setFilteredYear] = useState("2024");

	const filterChangeHandler = (selectedYear: string) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = expenses.filter((expense) => expense.date.getFullYear() === parseInt(filteredYear));

	return (
		<Card className={expensesContainer}>
			<ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

			<ExpenseChart expenses={filteredExpenses} />
			<ExpenseList filteredExpenses={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
