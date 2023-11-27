import { axiosClient } from "../apiClient";

async function LoginUser(email: string, password: string) {
    if (!email || !password) {
        throw new Error("All fields are required");
    }
    try {
        const response = await axiosClient().post("/users/login/", {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
export default LoginUser