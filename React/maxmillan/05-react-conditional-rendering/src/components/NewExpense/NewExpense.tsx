import ExpenseForm from "../ExpenseForm/ExpenseForm";

import { IInputExpenseData } from "./NewExpense.types";

import styles from "./NewExpense.module.scss";

const NewExpense = ({ onAddExpenseData }: { onAddExpenseData: (expenseData: any) => void }) => {
	const { newExpense } = styles;

	const saveExpenseDataHandler = (inputExpenseDate: IInputExpenseData) => {
		const expenseData = {
			...inputExpenseDate,
			id: Math.random().toString(),
		};
		onAddExpenseData(expenseData);
	};

	return (
		<div className={newExpense}>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
