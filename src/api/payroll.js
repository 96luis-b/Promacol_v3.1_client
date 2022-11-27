import api from '../api/server'

let storage = JSON.parse(localStorage.getItem('user'))

export const getPayrollEmployee = async (data) => {
    const res = await fetch(`${api}payroll/getPayrollEmployee`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
}

export const payEmployee = async (data) => {

  const res = await fetch(`${api}payroll/payEmployee`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": `${storage.token}`
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export const getPayrollEmployeeReport = async (data) => {
  const res = await fetch(`${api}payroll/getPayrollEmployeeReport`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}