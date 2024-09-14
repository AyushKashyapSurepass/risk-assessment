import axios from "axios";
const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.59:5000', withCredentials: true
});

export default axiosInstance;
