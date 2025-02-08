import axiosClient from './axiosClient';
import { UserResponse } from './response/userRespose';

const USER_API = {
  getUserById: async (userId) => {
    const res = await axiosClient.get(`/users/${userId}`);

    const userCurrent = new UserResponse(res);

    return userCurrent;
  },
  uploadAvatar: async (fromData) => await axiosClient.post(`/users/upload-avatar`, fromData)
};

export default USER_API;
