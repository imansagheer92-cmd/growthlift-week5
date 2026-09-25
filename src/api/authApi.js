import axios from "axios";

export const login = (data) => {
    return axios.post(
        "http://localhost:3000/api/auth/login",
        data
    );
};