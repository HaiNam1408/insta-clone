import axiosClient from './axiosClient';
import { PostResponse } from './response/postRespose';
import USER_API from './userApi';

const POST_API = {
  getPostById: async (postId) => {
    const { response, ...res } = await axiosClient.get(`/posts/${postId}`);
    const userRes = await USER_API.getUserById(response.userId);

    response.avatar = userRes.avatar;
    response.username = userRes.username;

    const postRes = new PostResponse(response);

    return { res, response: postRes };
  },
  getPosts: async () => {
    try {
      const res = await axiosClient.get('/posts');

      const newData = await res.map(async (post) => {
        const response = await USER_API.getUserById(post.userId);

        post.avatar = response.avatar;
        post.username = response.username;

        const postRes = new PostResponse(post);

        return postRes;
      });

      const data = await Promise.all(newData);

      return data;
    } catch (error) {
      console.log({ error });
    }
  },
  createPost: async (post) => {
    const { data, ...res } = await axiosClient.post('/posts/create', post);

    const { response: userRes } = await USER_API.getUserById(data.userId);

    data.avatar = userRes.avatar;
    data.username = userRes.username;

    const postRes = new PostResponse(data);

    return { res, data: postRes };
  },
  updatePost: async (post) => await axiosClient.post(`/posts/update/${post.id}`, post),
  deletePost: async (postId) => await axiosClient.post(`/posts/delete/${postId}`)
};

export default POST_API;
