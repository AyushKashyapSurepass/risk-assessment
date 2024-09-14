import axiosInstance from "../../AxiosInstance/axiosInstance";
export const postUser = (body) => {
    return axiosInstance.post('/admin/init', body);
};