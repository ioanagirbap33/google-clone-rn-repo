import {useState} from 'react';
import {
  StyleSheet,
  Image,
  TextInput,
  View,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';

export const SearchInput = () => {
  const [enteredSearch, setEnteredSearch] = useState('');

  const searchInputHandler = (enteredText: string) => {
    setEnteredSearch(enteredText);
  };

  const handleSearch = () => {
    console.log(enteredSearch);
  };

  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={handleSearch}>
          <Image
            style={styles.icon}
            source={require('../icons/search-icon.png')}
          />
        </Pressable>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={searchInputHandler}
        value={enteredSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 40,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    marginTop: 30,
  },
  input: {
    marginLeft: 10,
    padding: 7,
    width: '90%',
    color: 'white',
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
    left: 10,
  },
});
