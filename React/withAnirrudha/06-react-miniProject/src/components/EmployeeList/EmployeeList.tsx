import styles from "./EmployeeList.module.scss"

import { IEmployeeList } from "./EmployeeList.types";

const EmployeeList = ({ employees }: IEmployeeList) => {
  const { employeeList, employeeItem } = styles;
  return (
    <div className={employeeList}>
      {
        employees.map(employee => {
          return (
            <div className={employeeItem}>
              <p>{employee.name}</p>
            </div>
          )
        })
      }</div>
  )
}

export default EmployeeList