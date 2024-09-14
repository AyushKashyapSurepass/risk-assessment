import axiosInstance from "@/AxiosInstance/index.js";
export const postUser = (body) => {
    return axiosInstance.post('/admin/init', body);
};
export const getQuestions = (payload) => axiosInstance.post('/questions/get-question', {question_doc_id : payload})

