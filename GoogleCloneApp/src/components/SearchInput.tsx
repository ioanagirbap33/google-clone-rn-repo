import {StyleSheet, Image, TextInput, View, Pressable} from 'react-native';

export type SearchInputProps = {
  handleSearch: () => void;
  onChange: (search: string) => void;
  enteredValue: string;
};

export const SearchInput = ({
  handleSearch,
  enteredValue,
  onChange,
}: SearchInputProps) => {
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
