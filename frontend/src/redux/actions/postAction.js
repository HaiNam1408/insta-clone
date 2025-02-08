import { POST_API, USER_API } from '../../api';
import { PostResponse } from '../../api/response/postRespose';
import { POST_TYPES } from '../../libs/constants/actionTypes';

export const POST_ACTIONS = {
  findPostById: async (dispatch, postId) => {
    dispatch({ type: POST_TYPES.PENDING_POST });

    try {
      const data = await POST_API.getPostById(postId);

      dispatch({ type: POST_TYPES.GET_POST_BY_ID, payload: data });
    } catch (error) {
      dispatch({ type: POST_TYPES.REJECTED_POST, error: error });
    }
  },

  findAllPosts: async (dispatch) => {
    dispatch({ type: POST_TYPES.PENDING_POST });

    try {
      const data = await POST_API.getPosts();

      dispatch({ type: POST_TYPES.GET_POSTS, payload: data });
    } catch (error) {
      dispatch({ type: POST_TYPES.REJECTED_POST, error: error });
    }
  },

  createOnePost: async (dispatch, post) => {
    dispatch({ type: POST_TYPES.PENDING_POST });

    try {
      const data = await POST_API.createPost(post);

      dispatch({ type: POST_TYPES.CREATE_POST, payload: data });
    } catch (error) {
      dispatch({ type: POST_TYPES.REJECTED_POST, error: error });
    }
  },

  findUpdateById: async (dispatch, post) => {
    dispatch({ type: POST_TYPES.PENDING_POST });

    try {
      // const data = await POST_API.updatePost(post);

      dispatch({ type: POST_TYPES.UPDATE_POST, payload: post });
    } catch (error) {
      dispatch({ type: POST_TYPES.REJECTED_POST, error: error });
    }
  },

  findRemoveById: async (dispatch, postId) => {
    dispatch({ type: POST_TYPES.PENDING_POST });

    try {
      // const data = await POST_API.deletePost(postId);

      dispatch({ type: POST_TYPES.DELETE_POST, payload: postId });
    } catch (error) {
      dispatch({ type: POST_TYPES.REJECTED_POST, error: error });
    }
  }
};
