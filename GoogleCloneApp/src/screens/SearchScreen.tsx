import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, StyleSheet, Image, Pressable} from 'react-native';

import {RootStackParamList} from '../App';
import {SearchInput} from '../components/SearchInput';
import {useEffect, useState} from 'react';
import {Filters} from '../components/filters/Filters';
import firestore from '@react-native-firebase/firestore';
import {Colors} from '../utils/Colors';
import {Profile} from '../components/Profile';
import {AllResults} from '../components/filters/AllResults';
import {Images} from '../components/filters/Images';
import {Videos} from '../components/filters/Videos';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

export type SearchResultType = {
  link: string;
  title: string;
  image: string;
};

export type ResultProps = {
  search: string;
  results: SearchResultType[];
  id: string;
};

export const SearchScreen = ({route, navigation}: NavigationProps) => {
  const searchResult = route.params.userSearch;
  const filteredResult = route.params.userFilter;

  const [enteredSearch, setEnteredSearch] = useState(searchResult);
  const [enteredAfterSearch, setEnteredAfterSearch] = useState(searchResult);

  const [selectedFilter, setSelectedFilter] = useState(filteredResult);

  const handleFilterPress = (filterType: string) => {
    setSelectedFilter(filterType);
  };

  const [result, setResult] = useState<ResultProps[]>([]);

  const searchInputHandler = (enteredText: string) => {
    setEnteredSearch(enteredText);
  };

  const handleClick = () => {
    navigation.navigate('Home');
  };

  const fetchData = async () => {
    try {
      const querySnapshot = await firestore().collection('SearchResult').get();

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
    setEnteredAfterSearch(enteredSearch);
    const normalizedSearch = enteredAfterSearch?.replace(/\s+/g, ' ').trim();
    if (normalizedSearch !== '') {
      fetchData();
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Pressable onPress={handleClick}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
                }}
              />
            </Pressable>
          </View>
          <View style={styles.icons}>
            <Profile title="Sign In" />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <SearchInput
            enteredValue={enteredSearch}
            onChange={searchInputHandler}
            handleSearch={handleSearch}
          />
        </View>

        <Filters
          handleFilterPress={handleFilterPress}
          selectedFilter={selectedFilter}
        />
      </View>
      {selectedFilter === 'all' && (
        <AllResults result={result} inputValue={enteredAfterSearch} />
      )}
      {selectedFilter === 'images' && (
        <Images result={result} inputValue={enteredAfterSearch} />
      )}
      {selectedFilter !== 'all' && selectedFilter !== 'images' && <Videos />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    alignItems: 'center',
    marginVertical: 10,
    paddingBottom: 10,
    gap: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#4e4949',
    padding: 10,
    backgroundColor: Colors.primary,
  },
  header: {
    flexDirection: 'row',
    position: 'relative',
    marginBottom: 10,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  icon: {
    width: 25,
    height: 25,
  },
  icons: {
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
    right: 16,
    gap: 10,
  },

  inputContainer: {
    shadowColor: '#020202',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
});
