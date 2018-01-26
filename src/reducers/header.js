import { MENU_TOGGLE } from '../actions';

const initialState = {
  menuOpen: false
};

export default function headerReducer(state=initialState, action) {
  if(action.type===MENU_TOGGLE) {
    return Object.assign({}, state, {
      menuOpen: !state.menuOpen
    });
  }
  return state;
}