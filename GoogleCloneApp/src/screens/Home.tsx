import {View, Text, Image, StyleSheet} from 'react-native';
export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View></View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
        }}
      />
      <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  header: {
    padding: 20,
    marginBottom: 50,
  },
  image: {
    width: 130,
    height: 51,
    resizeMode: 'contain',
  },
});
