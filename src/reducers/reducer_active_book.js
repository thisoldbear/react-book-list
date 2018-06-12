/// State arg is not app state, only the state
///  that this reducer is responsible for (the state produced by it before)
export default (state = null, action) => {
  switch (action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  };

  return state;
}
