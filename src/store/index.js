import { createStore } from 'redux';

import taskReducer from './reducers/task.reducer';

export default createStore(taskReducer)
