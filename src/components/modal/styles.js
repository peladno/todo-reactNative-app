import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.transparentBackground,
  },
  modalMessageContainer: {
    backgroundColor: Colors.white,
    width: "80%",
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: "Lora-bold",
    marginBottom: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  modalDetailContainer: {
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalDetailText: {
    fontSize: 14,
    color: Colors.text,
    fontFamily: "Lora-regular"
  },
  selectedTask: {
    fontSize: 14,
    color: Colors.text,
    fontFamily: "Lora-bold",
    paddingVertical: 20,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
