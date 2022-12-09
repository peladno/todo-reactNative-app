import { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { Home, TaskPage } from "./components/index";
import { styles } from "./styles";
import { useFonts } from 'expo-font';
import AppNavigator from "./navigation";

export default function App() {
 const [loaded] = useFonts({
  "Lora-regular": require("../assets/fonts/Lora-Regular.ttf"),
  "Lora-bold": require("../assets/fonts/Lora-Bold.ttf")
 })

 

  if(!loaded){
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }
  return <AppNavigator/>
}
