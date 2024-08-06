import { useState } from "react";

import { IInputExpenseData } from "../NewExpense/NewExpense.types";

import styles from "./ExpenseForm.module.scss";

const FormInput = ({ onSaveExpenseData }: { onSaveExpenseData: (inputExpenseDate: IInputExpenseData) => void }) => {
	const { controls, control, actions } = styles;

	const [inputTitle, setInputTitle] = useState("");
	const [inputAmount, setInputAmount] = useState("");
	const [inputDate, setInputDate] = useState("");

	const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputTitle(event.target.value);
	};
	const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputAmount(event.target.value);
	};
	const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputDate(event.target.value);
	};

	// const [inputData, setInputData] = useState({
	// 	titleInput: "",
	// 	amountInput: "",
	// 	dateInput: "",
	// });

	// const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setInputData((prevState) => ({ ...prevState, titleInput: event.target.value }));
	// };
	// const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setInputData((prevState) => ({ ...prevState, amountInput: event.target.value }));
	// };
	// const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setInputData((prevState) => ({ ...prevState, dateInput: event.target.value }));
	// };

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const expenseData = {
			title: inputTitle,
			amount: parseFloat(inputAmount),
			date: new Date(inputDate),
		};
		onSaveExpenseData(expenseData);

		setInputTitle("");
		setInputAmount("");
		setInputDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className={controls}>
				<div className={control}>
					<label htmlFor="">Title</label>
					<input type="text" value={inputTitle} onChange={titleChangeHandler} />
				</div>
				<div className={control}>
					<label htmlFor="">Amount</label>
					<input type="number" value={inputAmount} onChange={amountChangeHandler} />
				</div>
				<div className={control}>
					<label htmlFor="">Date</label>
					<input type="date" value={inputDate} onChange={dateChangeHandler} />
				</div>
			</div>
			<div className={actions}>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default FormInput;
