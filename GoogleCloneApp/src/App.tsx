import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {HomeScreen} from './screens/HomeScreen';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationConfig} from 'react-native-screens/lib/typescript/native-stack/types';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {SearchScreen} from './screens/SearchScreen';

// const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Search: {userSearch: string};
};

// type HomeScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'Home'
// >;
// type SearchScreenRouteProp = RouteProp<RootStackParamList, 'Search'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            initialParams={{userSearch: ''}}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
