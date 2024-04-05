import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Home} from './screens/Home';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar />

      <View>
        <Home />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#5f5f5f',
  },
});

export default App;
