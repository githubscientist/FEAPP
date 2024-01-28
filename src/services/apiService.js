import axios from "axios";

const apiService = axios.create({
    baseURL: "https://placesapp-be.onrender.com/api/",
});

export default apiService;