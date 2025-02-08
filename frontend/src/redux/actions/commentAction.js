import { COMMENT_TYPES } from '../../libs/constants/actionTypes';

export const COMMENT_ACTIONS = {
  addReply: async (dispatch, content) => {
    dispatch({ type: COMMENT_TYPES.ADD_REPLY, payload: content });
  }
};
