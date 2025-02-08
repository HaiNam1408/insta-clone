import { USER_API } from '../../api';
import AUTH_API from '../../api/authApi';
import { USER_TYPES } from '../../libs/constants/actionTypes';

export const USER_ACTIONS = {
  login: async (dispatch, user) => {
    dispatch({ type: USER_TYPES.PENDING_USER });

    try {
      // Call API
      const data = await AUTH_API.login(user);

      dispatch({ type: USER_TYPES.LOGIN, payload: data });
    } catch (error) {
      dispatch({ type: USER_TYPES.REJECTED_USER, error: error });
    }
  },

  register: async (dispatch, user) => {
    dispatch({ type: USER_TYPES.PENDING_USER });

    try {
      // Call API
      const data = await AUTH_API.register(user);
      dispatch({ type: USER_TYPES.REGISTER, payload: data });

      setTimeout(() => {
        dispatch({
          type: USER_TYPES.REGISTER,
          payload: {}
        });
      }, 2000);
    } catch (error) {
      dispatch({ type: USER_TYPES.REJECTED_USER, error: error });
    }
  },

  findAllPosts: async (dispatch) => {
    dispatch({ type: USER_TYPES.PENDING_USER });

    try {
      // Call API
      const data = await USER_API.getPosts();

      dispatch({ type: USER_TYPES.GET_USERS, payload: data });
    } catch (error) {
      dispatch({ type: USER_TYPES.REJECTED_USER, error: error });
    }
  },

  createOnePost: async (dispatch, post) => {
    dispatch({ type: USER_TYPES.PENDING_USER });

    try {
      // const data = await USER_API.createPost(post);

      dispatch({ type: USER_TYPES.CREATE_USER, payload: post });
    } catch (error) {
      dispatch({ type: USER_TYPES.REJECTED_USER, error: error });
    }
  },

  findUpdateById: async (dispatch, post) => {
    dispatch({ type: USER_TYPES.PENDING_USER });

    try {
      // const data = await USER_API.updatePost(post);

      dispatch({ type: USER_TYPES.UPDATE_USER, payload: post });
    } catch (error) {
      dispatch({ type: USER_TYPES.REJECTED_USER, error: error });
    }
  },

  findRemoveById: async (dispatch, postId) => {
    dispatch({ type: USER_TYPES.PENDING_USER });

    try {
      // const data = await USER_API.deletePost(postId);

      dispatch({ type: USER_TYPES.DELETE_USER, payload: postId });
    } catch (error) {
      dispatch({ type: USER_TYPES.REJECTED_USER, error: error });
    }
  },

  forgotPassword: async (dispatch, email) => {
    dispatch({ type: USER_TYPES.PENDING_USER });

    try {
      const data = await AUTH_API.forgotPassword(email);

      const setCookie = (name, value, expirationMinutes) => {
        const date = new Date();
        date.setTime(date.getTime() + expirationMinutes * 60 * 1000);
        const expires = 'expires=' + date.toUTCString();
        document.cookie = name + '=' + value + ';' + expires + ';path=/';
      };

      setCookie('resetToken', data.token, 5);

      dispatch({ type: USER_TYPES.FORGOT_PASSWORD, payload: data });
    } catch (error) {
      dispatch({ type: USER_TYPES.REJECTED_USER, error: error });
    }
  },

  resetPassword: async (dispatch, resetPassword) => {
    dispatch({ type: USER_TYPES.PENDING_USER });

    try {
      const data = await AUTH_API.resetPassword(resetPassword);

      dispatch({ type: USER_TYPES.RESET_PASSWORD, payload: data });
    } catch (error) {
      dispatch({ type: USER_TYPES.REJECTED_USER, error: error });
    }
  },

  addUserCurrent: async (dispatch, userCurrent) => {
    dispatch({ type: USER_TYPES.PENDING_USER });

    try {
      const data = await USER_API.getUserById(userCurrent.id);

      dispatch({ type: USER_TYPES.ADD_USER_CURRENT, payload: data });
    } catch (error) {
      dispatch({ type: USER_TYPES.REJECTED_USER, error: error });
    }
  },

  uploadAvatar: async (dispatch, file) => {
    dispatch({ type: USER_TYPES.PENDING_USER });

    try {
      const data = await USER_API.uploadAvatar(file);

      dispatch({ type: USER_TYPES.UPLOAD_AVATAR, payload: data });
    } catch (error) {
      dispatch({ type: USER_TYPES.REJECTED_USER, error: error });
    }
  },

  logout: async (dispatch) => {
    dispatch({ type: USER_TYPES.LOGOUT });
  }
};
