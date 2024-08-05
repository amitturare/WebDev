import { IExpenseItemProps } from "./ExpenseItem.types";

import Card from "../../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

import styles from "./ExpenseItem.module.scss";

const ExpenseItem = ({ date, title, amount }: IExpenseItemProps) => {
	const { expenseItem, price, description } = styles;

	return (
		<Card className={expenseItem}>
			<ExpenseDate date={date} />

			<div className={description}>
				<h2>{title}</h2>
				<div className={price}>${amount}</div>
			</div>
		</Card>
	);
};

export default ExpenseItem;
