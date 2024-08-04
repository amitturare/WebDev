import { useEffect, useState } from "react";
import styles from "./Employees.module.scss"

import employeeService from "../../services/employee.service";

import EmployeeData from "../../components/EmployeeData/EmployeeData";
import EmployeeList from "../../components/EmployeeList/EmployeeList";

const Employees = () => {
  const { employeePage, employeeList, employeeData } = styles;

  const [employees, setEmployees] = useState([])

  const getEmployees = async () => {
    const data = await employeeService.getEmployees();
    setEmployees(data);
  };

  useEffect(() => {
    getEmployees();
  }, [])

  return (
    <>
      <div className={employeePage}>
        <div className={employeeList}>
          <EmployeeList employees={employees} />
        </div>

        <div className={employeeData}>
          <EmployeeData />
        </div>
      </div>
    </>
  )
}

export default Employees;