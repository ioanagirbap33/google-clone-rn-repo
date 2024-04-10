import {View, Text, FlatList, StyleSheet, Linking} from 'react-native';

import {ResultProps} from '../../screens/SearchScreen';
import {Colors} from '../../utils/Colors';

interface AllResultsProps {
  result: ResultProps[];

  inputValue: string | undefined;
}

export const AllResults = ({result, inputValue}: AllResultsProps) => {
  return (
    <View>
      {result.some(r => r.search.includes(inputValue!.toLowerCase())) ? (
        <FlatList
          style={styles.listContainer}
          data={result.filter(r =>
            r.search.includes(inputValue!.toLowerCase()),
          )}
          renderItem={({item}) => (
            <View>
              {item.results.map(({link, title}, index) => (
                <View style={styles.resultContainer} key={index}>
                  <Text style={{color: 'white', fontSize: 16}}>{title}</Text>
                  <Text
                    style={{color: Colors.button, fontSize: 18}}
                    onPress={() => Linking.openURL(`${link}`)}>
                    {link}
                  </Text>
                </View>
              ))}
            </View>
          )}
        />
      ) : (
        <Text style={styles.text}>There are no results for your search.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    marginBottom: 10,
    backgroundColor: Colors.primary,

    padding: 20,
    paddingLeft: 20,
  },
  text: {
    color: 'white',
    paddingLeft: 10,
    fontSize: 16,
  },
  listContainer: {
    height: '75%',
  },
});
