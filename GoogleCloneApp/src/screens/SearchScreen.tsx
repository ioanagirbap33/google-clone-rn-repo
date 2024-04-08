import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {RootStackParamList} from '../App';
import {SearchInput} from '../components/SearchInput';
import {useState} from 'react';
import {Filters} from '../components/Filters';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

export const SearchScreen = ({route, navigation}: Props) => {
  const searchResult = route.params.userSearch;
  const [enteredSearch, setEnteredSearch] = useState(searchResult);

  const searchInputHandler = (enteredText: string) => {
    setEnteredSearch(enteredText);
  };

  const handleClick = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Pressable onPress={handleClick}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
            }}
          />
        </Pressable>
        <SearchInput
          enteredValue={enteredSearch}
          onChange={searchInputHandler}
        />

        <Filters />
      </View>

      <Text>Search page: {searchResult}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#424242',
    padding: 10,
  },
  container: {
    alignItems: 'center',
    marginVertical: 20,
    gap: 5,
  },

  image: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
});
