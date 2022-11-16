import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from "./styles";

const ModalTask = ({
  selectedTask,
  modalVisible,
  onHandleCancel,
  onHandleDeleteItem,
}) => {
  return (
    <Modal visible={modalVisible} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalMessageContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailText}>
              Are you sure to delete this item?
            </Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button title="Cancel" color="#9A848F" onPress={onHandleCancel} />
            <Button
              title="Delete"
              color="#9A848F"
              onPress={onHandleDeleteItem}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalTask;
