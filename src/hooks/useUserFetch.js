import { useEffect } from "react";
import { useDispatch } from "react-redux";
import userService from "../services/userService";

const useUserFetch = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await userService.getAllUsers();
                dispatch({ type: 'SET_USERS', payload: users });
            } catch (error) {
                console.log('error fetching users', error);
            }
        }

        fetchUsers();
    }, [dispatch]);
}

export default useUserFetch;