import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {RootStackParamList} from '../App';
import {SearchInput} from '../components/SearchInput';
import {useEffect, useState} from 'react';
import {Filters} from '../components/Filters';
import firestore from '@react-native-firebase/firestore';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

type ResultProps = {
  search: string;
  results: string[];
  id: string;
};

export const SearchScreen = ({route, navigation}: NavigationProps) => {
  const searchResult = route.params.userSearch;
  const [enteredSearch, setEnteredSearch] = useState(searchResult);
  const [result, setResult] = useState<ResultProps[]>([]);

  const searchInputHandler = (enteredText: string) => {
    setEnteredSearch(enteredText);
  };

  const handleClick = () => {
    navigation.navigate('Home');
  };

  const fetchData = async () => {
    try {
      const querySnapshot = await firestore()
        .collection('SearchResult')
        .where('search', '==', enteredSearch?.toLowerCase())
        .get();

      const resultSaved: ResultProps[] = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        resultSaved.push({
          search: data.search,
          results: data.results,
          id: data.id,
        });
      });
      setResult(resultSaved);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const normalizedSearch = enteredSearch?.replace(/\s+/g, ' ').trim();
    if (normalizedSearch !== '') {
      fetchData();
    }
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
          handleSearch={handleSearch}
        />

        <Filters />
      </View>

      {/* <Text style={styles.text}>Search page: {searchResult}</Text> */}
      <View>
        {result.length > 0 ? (
          result.map(r => (
            <View key={r.id}>
              {r.results.map((item, index) => (
                <Text key={index}>{item}</Text>
              ))}
            </View>
          ))
        ) : (
          <Text style={styles.text}>No result found</Text>
        )}
      </View>
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
    paddingBottom: 10,
    gap: 5,
    // borderBottomWidth: 1,
    // borderBottomColor: '	#a9a9a9',
  },

  image: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    paddingLeft: 10,
  },
});
