import { MENU_TOGGLE, menuToggle } from './header';

describe('menuToggle', () => {
  it('Should return the action', () => {
    const action = menuToggle();
    expect(action.type).toEqual(MENU_TOGGLE);
  });
});