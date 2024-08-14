import { useEffect, useState } from "react";

import EmployeeDetails from "../EmployeeDetails/EmployeeDetails";
import EmployeeList from "../EmployeeList/EmployeeList";

import userService from "../../services/user.service";

import styles from "./Main.module.scss";

const Main = () => {
	const { Main } = styles;

	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState();

	const getUsers = async () => {
		const data = await userService.getUsers();
		setUsers(data);
	};

	useEffect(() => {
		getUsers();
	}, []);

	const handleEmployeeClick = (id: any) => {
		const selectedUser = users.find((user) => user.id === id);
		if (!selectedUser) return;
		setSelectedUser(selectedUser);
	};

	return (
		<main className={Main}>
			<EmployeeList employees={users} onEmployeeClick={handleEmployeeClick} />
			<EmployeeDetails employeeDetails={selectedUser} />
		</main>
	);
};

export default Main;
