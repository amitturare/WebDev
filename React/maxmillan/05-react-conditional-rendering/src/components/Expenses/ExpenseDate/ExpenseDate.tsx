import { getDateString } from "./ExpenseDate.helper";

import styles from "./ExpenseDate.module.scss";

const ExpenseDate = ({ date }: { date: Date }) => {
	const { expenseDate, month, year, day } = styles;

	const { yearStr, monthStr, dayStr } = getDateString(date);
	return (
		<div className={expenseDate}>
			<div className={month}>{monthStr}</div>
			<div className={year}>{yearStr}</div>
			<div className={day}>{dayStr}</div>
		</div>
	);
};

export default ExpenseDate;
