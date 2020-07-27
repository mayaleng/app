import {
  SELECT_MENU,
} from '../action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_MENU:
      return {
        ...state,
        selectedMenu: action.key,
      };
    default:
      return state;
  }
};
