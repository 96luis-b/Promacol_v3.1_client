import api from '../api/server'


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