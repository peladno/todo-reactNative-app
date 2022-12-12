import { taskListTypes } from '../types';

const { ADD_TASK, DELETE_TASK } = taskListTypes;
const initialState = {
  taskList: [],
  selected: null,
  //task: {},
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      state.taskList.push(action.payload);
      return state;
    case DELETE_TASK:
      const filtered = state.taskList.filter(
        (item) => item.id != action.payload
      );
      return { ...state, taskList: filtered };
    default:
      return state;
  }
};

export default taskReducer;
