import { createContext, useState, useEffect } from 'react'
import { loginAPI, logoutAPI } from '../api/auth'
import { deteleSingleCount } from '../utils/singleCount'
import { useHistory } from 'react-router-dom';


export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    // const history = useHistory();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    )

    useEffect(() => {
        try {
            localStorage.setItem('user', JSON.stringify(user))
        } catch (error) {
            localStorage.removeItem('user')
        }
    }, [user])

    const contextValue = {
        user,
        async login(data) {
            try {
                const res = await loginAPI(data)
                if (res.status != 200) {throw Error(res.message)}
                setUser(res.body)
                return true
                // history.push("/scop/tablero_conteo");
            } catch (error) {
                console.log("error: ", error.message)
                alert(error.message)
                return false
            }

        },
        async logout() {
            try {
                const res = await logoutAPI()
                if (res.status != 200) {throw Error(res.message)}
                    setUser(null)
                    deteleSingleCount()
                    return true
                    // history.push("/");
            } catch (error) {
                alert(error.message)
                return false
            }

        },
        isLogged() {
            return !!user
        }
    }

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>

}

export default AuthProvider