import { taskListTypes } from '../types';

const { ADD_TASK } = taskListTypes;

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};
