import api from '../api/server'


export const loginAPI = async (data) => {
    const res = await fetch(`${api}auth/signin`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return res.json();
}

export const logoutAPI = async () => {
    let storage = JSON.parse(localStorage.getItem('user'))
    const res = await fetch(`${api}auth/logout/${storage.user_id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-access-token": `${storage.token}`
        },
    });
    return res.json();
}

export const checkUser = async () => {
    let storage = JSON.parse(localStorage.getItem('user'))
    const res = await fetch(`${api}auth/checkUser`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": `${storage.token}`
        },
        body: JSON.stringify(storage),
      });
      return res.json();
}