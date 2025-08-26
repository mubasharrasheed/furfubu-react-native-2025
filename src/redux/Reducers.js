import { SET_USER, CLEAR_USER } from './Actions';

const initialUserState = {
  user: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case CLEAR_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default userReducer;
