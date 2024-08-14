import { useState } from "react";

import { IMainProps } from "./Main.types";

import AddEmployeeModal from "../Modals/AddEmployeeModal/AddEmployeeModal";

import employeeService from "../../services/employee.service";

import styles from "./Main.module.scss";
import { FieldValues } from "react-hook-form";

const Main = ({}: IMainProps) => {
	const [showModal, setShowModal] = useState(true);

	const [formData, setFormData] = useState<FieldValues>();

	const handleFormData = (data: FieldValues) => {
		setFormData(data);
	};

	employeeService.addEmployee(FormData);

	return (
		<main className={styles.Main}>
			{showModal && <AddEmployeeModal getFormData={handleFormData} />}
			<span>Main</span>
		</main>
	);
};

export default Main;
