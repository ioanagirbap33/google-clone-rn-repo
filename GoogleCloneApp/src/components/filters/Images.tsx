import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import {ResultProps} from '../../screens/SearchScreen';
import {Colors} from '../../utils/Colors';

interface AllResultsProps {
  result: ResultProps[];
  inputValue: string | undefined;
}

const {width} = Dimensions.get('window');
const imageWidth = (width - 40) / 2; // Se scade padding-ul pentru a distribui spațiul corect între cele două coloane

export const Images = ({result, inputValue}: AllResultsProps) => {
  return (
    <View>
      {result.some(r => r.search.includes(inputValue!.toLowerCase())) ? (
        <FlatList
          data={result.filter(r =>
            r.search.includes(inputValue!.toLowerCase()),
          )}
          renderItem={({item}) => (
            <View style={styles.resultContainer}>
              {item.results.map(({image, title}, index) => (
                <View style={styles.itemContainer} key={index}>
                  <Text style={{color: 'white', fontSize: 16}}>{title}</Text>
                  <Image
                    style={[
                      styles.image,
                      {width: imageWidth, height: imageWidth},
                    ]}
                    source={{uri: image}}
                  />
                </View>
              ))}
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      ) : (
        <Text style={styles.text}>There are no results for your search.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  itemContainer: {
    width: '48%', // Astfel încât să încapă două elemente pe rând, cu puțin spațiu între ele
    marginBottom: 10,
    alignItems: 'center', // Aliniați imaginea și textul pe centru
  },
  text: {
    color: 'white',
    paddingLeft: 10,
    fontSize: 16,
  },
  image: {
    resizeMode: 'cover',
  },
});
