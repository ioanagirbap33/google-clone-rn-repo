import {useCallback, useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {Header} from '../components/Header';
import {SearchInput} from '../components/SearchInput';
import {useFocusEffect} from '@react-navigation/native';
import {Colors} from '../utils/Colors';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: NavigationProps) => {
  const [enteredSearch, setEnteredSearch] = useState('');
  const [selectedButton, setSelectedButton] = useState('all');

  const handleButtonPress = (buttonType: string) => {
    setSelectedButton(buttonType);
  };

  const searchInputHandler = (enteredText: string) => {
    setEnteredSearch(enteredText);
  };

  useFocusEffect(
    useCallback(() => {
      setEnteredSearch('');
    }, []),
  );
  const handleSearch = () => {
    const normalizedSearch = enteredSearch?.replace(/\s+/g, ' ').trim();
    if (normalizedSearch !== '') {
      (
        navigation as unknown as NativeStackNavigationProp<
          RootStackParamList,
          'Search',
          undefined
        >
      ).navigate('Search', {
        userSearch: normalizedSearch,
        userFilter: selectedButton,
      });
    }
  };

  return (
    <View style={styles.wrapper}>
      <Header
        selectedButton={selectedButton}
        handleButtonPress={handleButtonPress}
      />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
          }}
        />

        <SearchInput
          enteredValue={enteredSearch}
          onChange={searchInputHandler}
          handleSearch={handleSearch}
        />
      </View>
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
    gap: 30,
    paddingHorizontal: 40,
  },
  header: {
    padding: 20,
    marginBottom: 50,
  },
  image: {
    width: 170,
    height: 60,
    resizeMode: 'contain',
  },
});
