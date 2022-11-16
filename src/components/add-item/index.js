import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './styles';

const AddItem = ({ task, onHandleTask, onHandleChange }) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          value={task} 
          placeholder="Enter Task"
          onChangeText={onHandleChange}
        />
        <Button disabled={!task} title='Add' color='#52489C' onPress={onHandleTask} />
      </View>
    )
}

export default AddItem;