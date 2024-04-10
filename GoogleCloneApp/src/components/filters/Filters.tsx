import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../utils/Colors';

interface FiltersProp {
  handleFilterPress: (button: string) => void;
  selectedFilter?: string;
}

export const Filters = ({handleFilterPress, selectedFilter}: FiltersProp) => {
  return (
    <View style={styles.filterContainer}>
      <Pressable
        style={() => selectedFilter === 'all' && styles.selectedFilter}
        onPress={() => handleFilterPress('all')}>
        <Text style={styles.text}>All</Text>
      </Pressable>

      <Pressable
        style={() => selectedFilter === 'images' && styles.selectedFilter}
        onPress={() => handleFilterPress('images')}>
        <Text style={styles.text}>Images</Text>
      </Pressable>

      <Pressable
        style={() => selectedFilter === 'videos' && styles.selectedFilter}
        onPress={() => handleFilterPress('videos')}>
        <Text style={styles.text}>Videos</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
    padding: 3,
  },
  selectedFilter: {
    backgroundColor: Colors.button,
    borderRadius: 7,
    // borderColor: 'white',
    // borderWidth: 0.5,
  },
  filterContainer: {
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'flex-start',
    paddingLeft: 10,
    marginTop: 5,
  },
});
