import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { SETUSER, LOGOUT, SETTOKEN } from "../redux/actions/userActions";
import apiService from "../services/apiService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null); 
    const dispatch = useDispatch();

    const login = async (userData) => {
        try {
            const response = await apiService.post('/users/login', userData);

            if (response.status === 200) {
                const { user, token } = response.data;

                console.log(user);

                setUser(user);
                setToken(token);

                dispatch(SETUSER(user));
                dispatch(SETTOKEN(token));

                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', JSON.stringify(token));

                return user;
            } else {
                console.log('error logging in', response);
            }
        } catch (error) {
            console.log('error logging in', error);
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);

        dispatch(LOGOUT());

        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('state');

        return true;
    };

    const register = async (userData) => {
        try {
            const response = await apiService.post('/users/signup', userData);

            if (response.status === 200) {

                console.log(response.data.message);

                setUser(response.data.user);
                setToken(response.data.token);
                

                dispatch(SETUSER(response.data.user));
                dispatch(SETTOKEN(response.data.token));

                localStorage.setItem('user', JSON.stringify(response.data.user));
                localStorage.setItem('token', JSON.stringify(response.data.token));

                return response.data.user;
            } else {
                console.log('error registering user', response);
            }
        } catch (err) {
            console.log('error registering user', err);
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext);
}

export { useAuth , AuthProvider };