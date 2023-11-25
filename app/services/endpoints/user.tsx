import { axiosClient } from "../apiClient";


export async function RegisterUser(firstName: string, lastName: string, email: string, password: string) {
    if (!firstName || !lastName || !email || !password) {
        throw new Error("All fields are required");
      }
      try {
        console.log(firstName, lastName)
        return await axiosClient().post("/users/", {
            firstName,
            lastName,
            email,
            password,
        });
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}
