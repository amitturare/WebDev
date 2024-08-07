import { useState } from "react";

import { IExpensesProps } from "./Expenses.types";

import Card from "../Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

import styles from "./Expenses.module.scss";

const Expenses = ({ expenses }: IExpensesProps) => {
	const { expensesContainer } = styles;

	const [fitleredYear, setFilteredYear] = useState("2024");

	const filterChangeHandler = (selectedYear: string) => {
		setFilteredYear(selectedYear);
	};

	return (
		<Card className={expensesContainer}>
			<ExpenseFilter selected={fitleredYear} onChangeFilter={filterChangeHandler} />
			{expenses.map(({ id, title, date, amount }) => {
				return <ExpenseItem id={id} title={title} date={date} amount={amount} />;
			})}
		</Card>
	);
};

export default Expenses;
