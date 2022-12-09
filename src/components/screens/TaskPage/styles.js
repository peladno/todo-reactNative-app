import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContainer: {
    marginHorizontal: 20,
  },
  listTitle: {
    fontSize: 18,
    fontFamily: 'Lora-bold',
    marginBottom: 10,
    color: Colors.text,
  },
});
