import { useEffect, useState } from "react";

import EmployeeDetails from "../EmployeeDetails/EmployeeDetails";
import EmployeeList from "../EmployeeList/EmployeeList";

import userService from "../../services/user.service";

import styles from "./Main.module.scss";

const Main = () => {
	const { Main } = styles;

	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const data = await userService.getUsers();
		setUsers(data);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<main className={Main}>
			<EmployeeList users={users} />
			<EmployeeDetails />
		</main>
	);
};

export default Main;
