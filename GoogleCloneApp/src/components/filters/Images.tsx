import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
  Linking,
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
  const dataResult: {image: string; title: string; link: string}[] = [];

  data.forEach(item => {
    item.results.forEach(result => {
      dataResult.push({
        image: result.image,
        title: result.title,
        link: result.link,
      });
    });
  });

  return (
    <>
      {
        <View>
          {dataResult.length > 0 ? (
            <FlatList
              style={styles.listContainer}
              data={dataResult}
              renderItem={({item}) => (
                <View style={styles.itemContainer}>
                  <Pressable onPress={() => Linking.openURL(`${item.link}`)}>
                    <Image
                      style={[
                        styles.image,
                        {width: imageWidth, height: imageWidth},
                      ]}
                      source={{uri: item.image}}
                    />
                    <Text style={styles.text}>{item.title}</Text>
                  </Pressable>
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
    </>
  );
};

const styles = StyleSheet.create({
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
