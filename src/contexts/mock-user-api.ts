import { User } from "../types/user";

// We mock our user API
const mockUsers: Array<User> = [];

export const LoginApi = (username: string, password: string): boolean => {
    const findUser: number = mockUsers.findIndex(u => u.username === username && u.password === password);
    return findUser >= 0;
}

export const RegisterUserApi = (username: string, password: string): boolean => {
    const newUser: User = {
        username: username,
        password: password
    };
    mockUsers.push(newUser);
    return true;
}