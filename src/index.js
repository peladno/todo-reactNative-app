import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import AppNavigator from './navigation';
import store from './store';
import { Provider } from 'react-redux';

export default function App() {
  const [loaded] = useFonts({
    'Lora-regular': require('../assets/fonts/Lora-Regular.ttf'),
    'Lora-bold': require('../assets/fonts/Lora-Bold.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
