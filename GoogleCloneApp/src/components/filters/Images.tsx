import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import {ResultProps} from '../../screens/SearchScreen';

interface AllResultsProps {
  result: ResultProps[];

  inputValue: string | undefined;
}

const {width} = Dimensions.get('window');
const imageWidth = (width - 60) / 2;

export const Images = ({result, inputValue}: AllResultsProps) => {
  const data = result.filter(r => r.search.includes(inputValue!.toLowerCase()));
  const dataResult: {image: string; title: string}[] = [];

  data.forEach(item => {
    item.results.forEach(result => {
      dataResult.push({image: result.image, title: result.title});
    });
  });

  return (
    <View style={styles.container}>
      {
        <View style={styles.container}>
          {dataResult.length > 0 ? (
            <FlatList
              style={styles.listContainer}
              data={dataResult}
              renderItem={({item}) => (
                <View style={styles.itemContainer}>
                  <Image
                    style={[
                      styles.image,
                      {width: imageWidth, height: imageWidth},
                    ]}
                    source={{uri: item.image}}
                  />
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
            />
          ) : (
            <Text style={styles.text}>
              There are no results for your search.
            </Text>
          )}
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 10,
    // backgroundColor: Colors.background,
  },
  resultContainer: {
    paddingLeft: 20,
  },
  itemContainer: {
    width: '48%',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    paddingLeft: 10,
    fontSize: 16,
  },
  listContainer: {
    height: '85%',
  },
  image: {
    resizeMode: 'cover',
  },
});
