import { taskListTypes } from '../types';

const { ADD_TASK } = taskListTypes;
const initialState = {
  taskList: [],
  //task: {},
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      state.taskList.push(action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
};

export default taskReducer;
