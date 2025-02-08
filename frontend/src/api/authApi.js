import axiosClient from './axiosClient';
import { UserResponse } from './response/userRespose';

const AUTH_API = {
  login: async (user) => {
    const res = await axiosClient.post('/users/login', user);
    const userLogin = new UserResponse(res);

    return userLogin;
  },
  register: async (user) => await axiosClient.post('/users/register', user),
  resetPassword: async ({ password, token }) =>
    await axiosClient.put(`/users/resetpassword`, { password, token }),
  forgotPassword: async (email) => await axiosClient.get(`/users/forgotpassword?email=${email}`),
  logout: async () => await axiosClient.get(`/users/logout`)
};

export default AUTH_API;
