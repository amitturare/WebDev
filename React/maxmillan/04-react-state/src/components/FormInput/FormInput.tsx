import styles from "./FormInput.module.scss";

const FormInput = ({
	title,
	type,
	inputChangeHandler,
}: {
	title: string;
	type: string;
	inputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	const { control } = styles;

	return (
		<div className={control}>
			<label htmlFor="">{title}</label>
			<input type={type} onChange={inputChangeHandler} />
		</div>
	);
};

export default FormInput;
