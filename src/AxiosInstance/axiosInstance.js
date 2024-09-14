import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "https://curious-walrus-miserably.ngrok-free.app/", withCredentials: true
});

export default axiosInstance;
