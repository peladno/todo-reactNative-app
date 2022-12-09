import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import TaskListNavigator from './taskList';

const AppNavigator = () => {
  return(
    <NavigationContainer>
      <TaskListNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
