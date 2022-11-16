import api from '../api/server'

export const searchCountEmployee = async (value) => {
    let storage = JSON.parse(localStorage.getItem('user'))
    const res = await fetch(`${api}countEmployee/searchCountEmployee/${value}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-access-token": `${storage.token}`
        },
    });
    return res.json();
}

export const moreLess = async (data) => {
  let storage = JSON.parse(localStorage.getItem('user'))
  const res = await fetch(`${api}countEmployee/moreLess`, {
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