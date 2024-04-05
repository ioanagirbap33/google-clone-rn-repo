import {View, Text, Image, StyleSheet} from 'react-native';
import {Header} from '../components/Header';
import {SearchInput} from '../components/SearchInput';
export const Home = () => {
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
          }}
        />
        <SearchInput />
      </View>
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
    width: 170,
    height: 60,
    resizeMode: 'contain',
  },
});
