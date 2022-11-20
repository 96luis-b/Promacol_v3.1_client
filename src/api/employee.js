import api from '../api/server'


export const signupEmployee = async (data) => {
    const res = await fetch(`${api}employee/signupEmployee`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return res.json();
}

export const updateEmployee = async (data) => {
    const res = await fetch(`${api}employee/updateEmployee`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return res.json();
}

export const getJob = async () => {
  let storage = JSON.parse(localStorage.getItem('user'))
  const res = await fetch(`${api}employee/getJob`, {
      method: "GET",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": `${storage.token}`
      },
  });
  return res.json();
}

export const searchEmployee = async (param) => {
  console.log("nos se que esta pasando")
  let storage = JSON.parse(localStorage.getItem('user'))
  const res = await fetch(`${api}employee/getEmployee/${param}`, {
      method: "GET",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": `${storage.token}`
      },
  });
  return res.json();
}

export const checkIn = async (param) => {
  let storage = JSON.parse(localStorage.getItem('user'))
  const res = await fetch(`${api}employee/checkIn/${param}`, {
      method: "GET",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": `${storage.token}`
      },
  });
  return res.json();
}

export const ckeckOut = async (param) => {
  let storage = JSON.parse(localStorage.getItem('user'))
  const res = await fetch(`${api}employee/ckeckOut/${param}`, {
      method: "GET",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": `${storage.token}`
      },
  });
  return res.json();
}

export const getEmpProduction = async (data) => {
  const res = await fetch(`${api}employee/getEmpProduction`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
}