import {StyleSheet, Image, TextInput, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export type SearchInputProps = {
  handleSearch?: () => void;
  onChange?: (search: string) => void;
  enteredValue?: string;
};

export const SearchInput = ({
  enteredValue,
  onChange,
  handleSearch,
}: SearchInputProps) => {
  const navigation = useNavigation();

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
        onChangeText={onChange}
        value={enteredValue}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#807b7b',
    borderRadius: 20,
    marginTop: 0,
  },
  input: {
    marginLeft: 10,
    padding: 7,
    width: '100%',
    color: 'white',
    fontSize: 20,
  },
  icon: {
    width: 20,
    height: 20,
    left: 10,
  },
});
