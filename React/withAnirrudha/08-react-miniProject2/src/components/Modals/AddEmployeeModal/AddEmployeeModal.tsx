import Modal from "../../Modal/Modal";

import styles from "./AddEmployeeModal.module.scss";

const AddEmployeeModal = () => {
	const { AddEmployee, FullHeight } = styles;

	return (
		<Modal>
			<section className={AddEmployee}>
				<section className={FullHeight}>
					<h1>Something big</h1>
				</section>
			</section>
		</Modal>
	);
};

export default AddEmployeeModal;
