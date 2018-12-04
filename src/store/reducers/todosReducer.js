const todosReducer = (state = [], action) => {
  console.log("reducer - ", action.type);
  switch (action.type) {
    case "ADD_TODO":
      const newState = state.concat([action.todo]);
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
