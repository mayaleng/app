import {
  SET_PROFILE,
} from '../action-types';

export default (profile = {}) => ({
  type: SET_PROFILE,
  profile,
});
