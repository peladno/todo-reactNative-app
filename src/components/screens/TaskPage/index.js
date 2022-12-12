import { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { AddItem, TaskItem, ModalTask, ListItem } from '../../index';
import { addTask, deleteTask } from '../../../store/actions/taskList.action';

import { useSelector, useDispatch } from 'react-redux';

export default function TaskPage() {
  const [task, setTask] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const taskList = useSelector((state) => state.taskList);

  const dispatch = useDispatch();

  const onHandleTask = () => {
    dispatch(
      addTask({
        id: Math.random().toString(),
        value: task,
      })
    );
    setTask('');
  };

  const onHandleSelected = (item) => {
    setSelectedTask(item);
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }) => (
    <TaskItem item={item} onHandleSelected={onHandleSelected} />
  );

  const onHandleCancel = () => {
    setModalVisible(!modalVisible);
  };

  const onHandleDeleteItem = () => {
    dispatch(deleteTask(selectedTask.id));
    setModalVisible(!modalVisible);
  };

  const onHandleChange = (text) => setTask(text);

  return (
    <View style={styles.container}>
      <AddItem
        task={task}
        onHandleTask={onHandleTask}
        onHandleChange={onHandleChange}
      />
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Todo List</Text>
      </View>
      <ListItem
        data={taskList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <ModalTask
        onHandleCancel={onHandleCancel}
        onHandleDeleteItem={onHandleDeleteItem}
        modalVisible={modalVisible}
        selectedTask={selectedTask}
      />
    </View>
  );
}
