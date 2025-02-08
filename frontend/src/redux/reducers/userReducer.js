import { USER_TYPES } from '../../libs/constants/actionTypes';

const initialState = {
  isLoading: false,
  message: {},
  data: [],
  userCurrent: {}
};

const userReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case USER_TYPES.LOGIN: {
      const { success, message, ...res } = payload;

      state.userCurrent = res;
      state.message = { success, message };

      if (payload.token && res) {
        const tokenExpiration = Date.now() / 1000 + 3600;

        localStorage.setItem('token', payload.token);
        localStorage.setItem('tokenExpiration', tokenExpiration);
        localStorage.setItem('data_user', JSON.stringify(res));
      }

      return {
        ...state,
        isLoading: false,
        message: ''
      };
    }

    case USER_TYPES.REGISTER: {
      state.message = payload;

      return {
        ...state,
        isLoading: false
      };
    }

    case USER_TYPES.GET_USERS: {
      return {
        ...state,
        isLoading: false,
        message: '',
        data: [...state.data, ...payload]
      };
    }

    case USER_TYPES.CREATE_USER: {
      return {
        ...state,
        isLoading: false,
        message: '',
        data: [...state.data, payload]
      };
    }

    case USER_TYPES.UPDATE_USER: {
      const newState = [...state.data];
      const index = newState.findIndex((user) => user.id === payload.id);

      if (index !== -1) newState[index] = payload;

      return {
        ...state,
        isLoading: false,
        message: '',
        data: newState
      };
    }

    case USER_TYPES.DELETE_USER: {
      const newState = [...state.data];
      const index = newState.findIndex((user) => user.id === payload);

      if (index !== -1) newState.splice(index, 1);

      return {
        ...state,
        isLoading: false,
        data: newState
      };
    }

    case USER_TYPES.UPLOAD_AVATAR: {
      return {
        ...state,
        isLoading: false,
        message: { success: payload.success },
        userCurrent: payload.data
      };
    }

    case USER_TYPES.ADD_USER_CURRENT: {
      state.userCurrent = payload;

      localStorage.setItem('token', payload.token);
      localStorage.setItem('data_user', JSON.stringify(payload));

      return { ...state, isLoading: false, message: '' };
    }

    case USER_TYPES.FORGOT_PASSWORD: {
      const { rs, ...res } = payload;

      state.message = res;

      return { ...state, isLoading: false };
    }

    case USER_TYPES.RESET_PASSWORD: {
      state.message = payload;

      return { ...state, isLoading: false };
    }

    case USER_TYPES.LOGOUT: {
      state.userCurrent = {};

      localStorage.removeItem('token');
      localStorage.removeItem('data_user');

      return { ...state, isLoading: false };
    }

    case USER_TYPES.PENDING_USER: {
      return {
        ...state,
        isLoading: true
      };
    }

    case USER_TYPES.REJECTED_USER: {
      return {
        ...state,
        isLoading: false,
        message: error
      };
    }

    default:
      return state;
  }
};

export default userReducer;
