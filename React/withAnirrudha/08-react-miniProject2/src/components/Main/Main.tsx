import { useState } from "react";

import { IMainProps } from "./Main.types";

import AddEmployeeModal from "../Modals/AddEmployeeModal/AddEmployeeModal";

import styles from "./Main.module.scss";

const Main = ({}: IMainProps) => {
	const [showModal, setShowModal] = useState(true);

	return (
		<main className={styles.Main}>
			{showModal && <AddEmployeeModal />}

			<span>Main</span>
		</main>
	);
};

export default Main;
