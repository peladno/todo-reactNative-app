import { taskListTypes } from '../types';

const { ADD_TASK, DELETE_TASK } = taskListTypes;

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
