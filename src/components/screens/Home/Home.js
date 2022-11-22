import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./styles";

function home({ onHandleEnter }) {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitle}>Welcome!</Text>
      <Button title="Enter" color='#52489C' onPress={() => onHandleEnter(true)} />
    </View>
  );
}

export default home;
