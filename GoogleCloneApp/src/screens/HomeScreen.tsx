import {useCallback, useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Header} from '../components/Header';
import {SearchInput} from '../components/SearchInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useFocusEffect} from '@react-navigation/native';

export const HomeScreen = () => {
  const [enteredSearch, setEnteredSearch] = useState('');

  const searchInputHandler = (enteredText: string) => {
    setEnteredSearch(enteredText);
  };

  useFocusEffect(
    useCallback(() => {
      setEnteredSearch('');
    }, []),
  );

  return (
    <View style={styles.wrapper}>
      <Header />
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
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#5f5f5f',
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
