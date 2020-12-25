import React, { useContext, useState } from "react"
import EmployeeStore from "../stores/EmployeeStore"
import { observer } from "mobx-react-lite"

const AddEmployee = () => {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const employeeStore = useContext(EmployeeStore)
  const { addEmployee, info } = employeeStore

  return (
    <>
      <div className="alert alert-primary">
        <div className="d-inline col-4">
          Total items: &nbsp;
          <span className="badge badge-info">{info.total}</span>
        </div>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          value={id}
          placeholder="Employee ID..."
          onChange={e => setId(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          value={name}
          placeholder="Employee name..."
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          value={email}
          placeholder="Employee Email..."
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-primary"
          onClick={_ => {
            addEmployee({
              id: id,
              name: name,
              email:email,
            })
            setId("")
            setName("")
            setEmail("")
          }}
        >
          Add Employee
        </button>
      </div>
    </>
  )
}

export default observer(AddEmployee)