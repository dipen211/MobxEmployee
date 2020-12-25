import { observable, action, computed, reaction } from "mobx"
import { createContext } from "react"

export interface Employee {
  id: string;
  name: string;
  email: string;
}

class EmployeeStore {
  constructor() {
    reaction(() => this.employees, () => console.log(this.employees.length))
  }

  @observable employees: Employee[] = [
    { id: "1", name:"Dipen", email: "pateldipen@gmail.com" },
    { id: "2", name:"Dipen", email: "pateldipen@gmail.com" },
    { id: "3", name:"Dipen", email: "pateldipen@gmail.com" },
    { id: "4", name:"Dipen", email: "pateldipen@gmail.com" },
    { id: "5", name:"Dipen", email: "pateldipen@gmail.com" },
    { id: "6", name:"Dipen", email: "pateldipen@gmail.com" },
  ]

  @action addEmployee = (employee: Employee) => {
    this.employees.push({ ...employee})
  }

  @action removeEmployee = (id: string) => {
    console.log(id);
    this.employees.splice(Number(id), 1);
    this.employees = this.employees.filter(employee => employee.id !== id)
  }

  @computed get info() {
    return {
      total: this.employees.length,
    }
  }
}

export default createContext(new EmployeeStore())