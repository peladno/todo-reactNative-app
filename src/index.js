import { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { Home, TaskPage } from "./components/index";
import { styles } from "./styles";
import { useFonts } from 'expo-font';

export default function App() {
 const [loaded] = useFonts({
  "Lora-regular": require("../assets/fonts/Lora-Regular.ttf"),
  "Lora-bold": require("../assets/fonts/Lora-Bold.ttf")
 })

  const [enter, setEnter] = useState(false);

  const onHandleEnter = (boolean) => {
    setEnter(boolean);
  };

  let content;

  enter
    ? (content = <TaskPage />)
    : (content = <Home onHandleEnter={onHandleEnter} />);


  if(!loaded){
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }
  return <View style={styles.appContainer}>{content}</View>;
}
