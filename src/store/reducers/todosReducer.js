const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newState = state.concat([action.data]);
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
