import { COMMENT_TYPES } from '../../libs/constants/actionTypes';

const initialState = {
  reply: ''
};

const commentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COMMENT_TYPES.ADD_REPLY: {
      const stateClone = { ...state };

      stateClone.reply = payload;

      return stateClone;
    }
    default:
      return state;
  }
};

export default commentReducer;
