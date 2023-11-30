import * as c from './../actions/ActionTypes';

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case c.SET_X:
      const newSquaresX = [...state.squares];
      newSquaresX[action.index] = 'X';
      return Object.assign({}, state, { squares: newSquaresX });
    case c.SET_O:
      const newSquaresO = [...state.squares];
      newSquaresO[action.index] = 'O';
      return Object.assign({}, state, { squares: newSquaresO });
    case c.TOGGLE_PLAYER:
      const newXIsNext = !state.xIsNext;
      return Object.assign({}, state, { xIsNext: newXIsNext })
    default:
      return state;
  }
};

export default reducer;