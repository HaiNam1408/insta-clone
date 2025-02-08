import { POST_TYPES } from '../../libs/constants/actionTypes';

const initialState = {
  isLoading: false,
  message: {},
  data: [],
  post: {}
};

const postReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case POST_TYPES.GET_POSTS: {
      state.data = payload;
      return { ...state };
    }

    case POST_TYPES.GET_POST_BY_ID: {
      const { response, ...res } = payload;

      return {
        ...state,
        post: response,
        message: res,
        isLoading: false
      };
    }

    case POST_TYPES.CREATE_POST: {
      const { data, ...res } = payload;

      return {
        ...state,
        isLoading: false,
        message: { res },
        data: [...state.data, data]
      };
    }

    case POST_TYPES.UPDATE_POST: {
      const newState = [...state.data];
      const index = newState.findIndex((post) => post.id === payload.id);

      if (index !== -1) newState[index] = payload;

      return {
        ...state,
        isLoading: false,
        message: '',
        data: newState
      };
    }

    case POST_TYPES.DELETE_POST: {
      const newState = [...state.data];
      const index = newState.findIndex((post) => post.id === payload);

      if (index !== -1) newState.splice(index, 1);

      return {
        ...state,
        isLoading: false,
        data: newState
      };
    }

    case POST_TYPES.PENDING_POST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case POST_TYPES.REJECTED_POST: {
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

export default postReducer;
