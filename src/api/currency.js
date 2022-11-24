
import api from '../api/server'


export const getProductPrice = async (data) => {
  const res = await fetch(`${api}currency/getProductPrice`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return res.json();
}
