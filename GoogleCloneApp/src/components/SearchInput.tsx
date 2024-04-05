import {StyleSheet, Image, TextInput, View} from 'react-native';

export const SearchInput = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.icon}
          source={require('../icons/search-icon.png')}
        />
      </View>
      <TextInput style={styles.input} />
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
    // position: 'absolute',
    left: 10,
  },
});
