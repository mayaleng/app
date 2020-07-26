import {
  RULES_LOAD,
} from '../action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case RULES_LOAD:
      return state;
    default:
      return state;
  }
};
