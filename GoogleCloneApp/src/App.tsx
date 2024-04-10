import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {HomeScreen} from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen} from './screens/SearchScreen';
import {Colors} from './utils/Colors';
import {AuthProvider} from './contexts/authContext';

export type RootStackParamList = {
  Home: undefined;
  Search: {userSearch?: string; userFilter?: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): React.JSX.Element => {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.wrapper}>
        <StatusBar />

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Search"
              component={SearchScreen}
              initialParams={{userSearch: ''}}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default App;
