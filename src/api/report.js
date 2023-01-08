

import api from '../api/server'

let storage = JSON.parse(localStorage.getItem('user'))

export const createWorkmanProductionReport = async (data) => {
    const res = await fetch(`${api}report/createWorkmanProductionReport`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
}



export const createPayrollReport = async (data) => {
    const res = await fetch(`${api}report/createPayrollReport`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
}