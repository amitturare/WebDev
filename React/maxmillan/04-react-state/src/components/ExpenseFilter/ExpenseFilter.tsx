import { IExpenseFilterProps } from "./ExpenseFilter.types";

import styles from "./ExpenseFilter.module.scss";

const ExpenseFilter = ({ selected, onChangeFilter }: IExpenseFilterProps) => {
	const { expenseFilter, control } = styles;

	const dropdownChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		onChangeFilter(event?.target.value);
	};

	return (
		<div className={expenseFilter}>
			<div className={control}>
				<label>Filter By Year</label>
				<select value={selected} onChange={dropdownChangeHandler}>
					<option value="2024">2024</option>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
				</select>
			</div>
		</div>
	);
};

export default ExpenseFilter;
