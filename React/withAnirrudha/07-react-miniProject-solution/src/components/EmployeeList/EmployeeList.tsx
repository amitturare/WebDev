import styles from "./EmployeeList.module.scss";
import { IEmployeeListProps } from "./EmployeeList.types";

const EmployeeList = ({ employees, onEmployeeClick }: IEmployeeListProps) => {
	const { EmployeeList } = styles;

	return (
		<div className={EmployeeList}>
			{employees.map((employee: any) => (
				<div onClick={onEmployeeClick(employee.id)}>
					<span>{employee.name}</span>
				</div>
			))}
		</div>
	);
};

export default EmployeeList;
