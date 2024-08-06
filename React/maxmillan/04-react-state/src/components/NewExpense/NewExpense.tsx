import FormInput from "../FormInput/FormInput";

import styles from "./NewExpense.module.scss";

const NewExpense = () => {
	const { newExpense, controls, actions } = styles;

	const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
	};
	return (
		<div className={newExpense}>
			<form>
				<div className={controls}>
					<FormInput title="Title" type="text" inputChangeHandler={inputChangeHandler} />
					<FormInput title="Amount" type="number" inputChangeHandler={inputChangeHandler} />
					<FormInput title="Date" type="Date" inputChangeHandler={inputChangeHandler} />
				</div>
				<div className={actions}>
					<button type="submit">Add Expense</button>
				</div>
			</form>
		</div>
	);
};

export default NewExpense;
