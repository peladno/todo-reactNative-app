import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalMessageContainer: {
    backgroundColor: "white",
    width: "80%",
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
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
    color: "#212121",
  },
  selectedTask: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "bold",
    paddingVertical: 20,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

