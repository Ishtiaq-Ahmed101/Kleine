import { axiosClient } from "../apiClient";

export async function RegisterUser(firstName: string, lastName: string, email: string, password: string) {
    if (!firstName || !lastName || !email || !password) {
        throw new Error("All fields are required");
    }
    try {
        const response = await axiosClient().post("/users/", {
            firstName,
            lastName,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
