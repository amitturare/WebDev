import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Modal from "../../Modal/Modal";

import styles from "./AddEmployeeModal.module.scss";

const AddEmployeeModal = ({ getFormData }: { getFormData: (data: FieldValues) => void }) => {
	const { AddEmployee } = styles;

	const { register, handleSubmit } = useForm();

	const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {          
		getFormData(data);
	};

	return (
		<Modal>
			<section className={AddEmployee}>
				<form onSubmit={handleSubmit(handleFormSubmit)}>
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" {...register("name")} />
					</div>

					<div>
						<label htmlFor="age">Age</label>
						<input type="number" {...register("age")} />
					</div>

					<div>
						<button>Submit</button>
					</div>
				</form>
			</section>
		</Modal>
	);
};

export default AddEmployeeModal;
