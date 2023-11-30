import * as c from './ActionTypes';

export const setX = (index) => ({
  type: c.SET_X,
  index: index
});

export const setO = (index) => ({
  type: c.SET_O,
  index: index
});

export const togglePlayer = () => ({
  type: c.TOGGLE_PLAYER
});


