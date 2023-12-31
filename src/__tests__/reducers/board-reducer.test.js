import squaresReducer from '../../reducers/board-reducer';

describe('squaresReducer', ()=> {


  const currentState = { 
    squares: Array(9).fill(null), 
    xIsNext: true 
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(squaresReducer({}, { type: null })).toEqual({});
  });

  test('Should return an array with 9 null elements', () => {
    
    expect(squaresReducer(currentState, { type: null })).toEqual({ squares: Array(9).fill(null), xIsNext: true })
  });
})