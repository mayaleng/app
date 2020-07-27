import {
  SELECT_MENU,
} from '../action-types';

const selectMenu = (key) => ({
  type: SELECT_MENU,
  key,
});

const selectDefault = () => ({
  type: SELECT_MENU,
  key: 'home',
});

export {
  selectMenu,
  selectDefault,
};
