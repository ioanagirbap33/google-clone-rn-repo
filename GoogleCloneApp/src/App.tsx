import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {HomeScreen} from './screens/HomeScreen';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationConfig} from 'react-native-screens/lib/typescript/native-stack/types';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {SearchScreen} from './screens/SearchScreen';
import {Colors} from './utils/Colors';

// const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Search: {userSearch?: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): React.JSX.Element => {
  return (
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
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default App;
