import { User } from "../types/user";

// We mock our user API
const mockUsers: Array<User> = [];

export const LoginApi = (user:User): boolean => {
    const findUser: number = mockUsers.findIndex(u => u.username === user.username && u.password === user.password);
    return findUser >= 0;
}

export const RegisterUserApi = (user:User): boolean => {
    // check unique register
    mockUsers.push(user);
    return true;
}