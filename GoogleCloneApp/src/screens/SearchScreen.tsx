import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

export const SearchScreen = ({route}: Props) => {
  const searchResult = route.params.userSearch;
  return (
    <View>
      <Text>Search page: {searchResult}</Text>
    </View>
  );
};
