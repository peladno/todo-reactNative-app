import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Home, TaskPage } from '../components';

const Stack = createNativeStackNavigator();

const TaskListNavigator = () => {
  return <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={Home}/>
    <Stack.Screen name='TaskPage' component={TaskPage}/>
  </Stack.Navigator>
};

export default TaskListNavigator;
