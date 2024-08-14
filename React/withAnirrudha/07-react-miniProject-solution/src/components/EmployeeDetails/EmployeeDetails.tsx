import { IEmployeeDetailsProps } from "./EmployeeDetails.types";

import styles from "./EmployeeDetails.module.scss";

const EmployeeDetails = ({ employeeDetails }: IEmployeeDetailsProps) => {
	const { EmployeeDetails } = styles;

	if (!employeeDetails) {
		return <div className={EmployeeDetails}></div>;
	}

	return (
		<div className={EmployeeDetails}>
			<h1>{employeeDetails.name}</h1>
			<h1>@{employeeDetails.username}</h1>
			<h1>{employeeDetails.company.name}</h1>
		</div>
	);
};

export default EmployeeDetails;
