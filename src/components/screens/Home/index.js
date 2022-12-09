import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './styles';

function Home({navigation}) {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitle}>Welcome!</Text>
      <Button title='Enter' color='#52489C' onPress={() => navigation.navigate('TaskPage')} />
    </View>
  );
}

export default Home;
