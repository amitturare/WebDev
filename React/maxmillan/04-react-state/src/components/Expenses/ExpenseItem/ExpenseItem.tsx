import { useState } from "react";

import { IExpenseItemProps } from "./ExpenseItem.types";

import Card from "../../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

import styles from "./ExpenseItem.module.scss";

const ExpenseItem = ({ date, title, amount }: IExpenseItemProps) => {
	const { expenseItem, price, description } = styles;

	const [expenseTitle, setExpenseTitle] = useState(title);

	const clickHandler = () => {
		setExpenseTitle("Updated");
	};

	return (
		<Card className={expenseItem}>
			<ExpenseDate date={date} />

			<div className={description}>
				<h2>{expenseTitle}</h2>
				<div className={price}>${amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
};

export default ExpenseItem;
