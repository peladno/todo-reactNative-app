import { useState } from "react";
import { View } from "react-native";
import { Home, TaskPage } from "./components/index";
import { styles } from "./styles";

export default function App() {
  const [enter, setEnter] = useState(false);

  const onHandleEnter = (entering) => {
    setEnter(entering);
  };

  let content;

  enter
    ? (content = <TaskPage />)
    : (content = <Home onHandleEnter={onHandleEnter} />);

  return <View style={styles.appContainer}>{content}</View>;
}
