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
    const res = await fetch(`${api}price/updateExchangeRate`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
}




