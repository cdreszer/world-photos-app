import directories, {initialState}  from './directoryReducer.js';

describe("directoryReducer", () => {
  it('Initial state is correct', () => {
    const action = { type: 'dummy' };

    expect(directories(undefined, action)).toEqual(initialState);
  });
});
