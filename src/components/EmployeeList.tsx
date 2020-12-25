import React, { useContext } from "react";
import EmployeeStore from "../stores/EmployeeStore";
import { observer } from "mobx-react-lite";
import AddEmployee from './EmployeeAdd'

const EmployeeList = () => {
    const employeeStore = useContext(EmployeeStore);
    const { employees, removeEmployee } = employeeStore;
    return (
        <>
            <AddEmployee />
            <div className="row">
                <table className="table table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={_ => removeEmployee(employee.id!)}
                                    >
                                        Remove
                  </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default observer(EmployeeList);