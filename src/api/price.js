import api from '../api/server'


export const getExchangeRate = async (data) => {
  const res = await fetch(`${api}price/getExchangeRate`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export const updateExchangeRate = async (data) => {
  let storage = JSON.parse(localStorage.getItem('user'))
  const res = await fetch(`${api}price/updateExchangeRate`, {
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

export const updateProdPrice = async (data) => {
  let storage = JSON.parse(localStorage.getItem('user'))
  const res = await fetch(`${api}price/updateProdPrice`, {
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




