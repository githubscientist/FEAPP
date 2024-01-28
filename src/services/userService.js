import apiService from './apiService';

const userService = {
    getAllUsers: async () => {
        try {
            const response = await apiService.get('/users');

            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log('error fetching users', error);
        }
    }
}

export default userService;