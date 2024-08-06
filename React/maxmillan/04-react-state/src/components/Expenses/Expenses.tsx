import { IExpensesProps } from "./Expenses.types";

import Card from "../Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

import styles from "./Expenses.module.scss";

const Expenses = ({ expenses }: IExpensesProps) => {
	const { expensesContainer } = styles;

	return (
		<Card className={expensesContainer}>
			{expenses.map(({ id, title, date, amount }) => {
				return <ExpenseItem id={id} title={title} date={date} amount={amount} />;
			})}
		</Card>
	);
};

export default Expenses;
