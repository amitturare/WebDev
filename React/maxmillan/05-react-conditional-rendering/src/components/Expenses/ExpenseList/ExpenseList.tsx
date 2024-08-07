import { IExpenseListProps } from "./ExpenseList.types";

import ExpenseItem from "../ExpenseItem/ExpenseItem";

import styles from "./ExpenseList.module.scss";

const ExpenseList = ({ filteredExpenses }: IExpenseListProps) => {
	const { expenseList, fallback } = styles;

	if (filteredExpenses.length === 0) return <h2 className={fallback}>No expenses found.</h2>;

	return (
		<ul className={expenseList}>
			{filteredExpenses.map(({ id, title, date, amount }) => {
				return <ExpenseItem key={id} title={title} date={date} amount={amount} />;
			})}
		</ul>
	);
};

export default ExpenseList;
