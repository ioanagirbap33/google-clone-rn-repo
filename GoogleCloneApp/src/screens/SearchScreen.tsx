import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

export const SearchScreen = () => {
  return (
    <View>
      <Text>Search page</Text>
    </View>
  );
};
