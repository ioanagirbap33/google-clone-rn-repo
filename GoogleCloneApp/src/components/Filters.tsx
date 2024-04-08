import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../utils/Colors';

export const Filters = ({filterName}: any) => {
  const [selectedButton, setSelectedButton] = useState('all');

  const handleButtonPress = (buttonType: string) => {
    setSelectedButton(buttonType);
  };

  return (
    <View style={styles.filterContainer}>
      <Pressable
        style={() => selectedButton === 'all' && styles.selectedButton}
        onPress={() => handleButtonPress('all')}>
        <Text style={styles.text}>All</Text>
      </Pressable>

      <Pressable
        style={() => selectedButton === 'images' && styles.selectedButton}
        onPress={() => handleButtonPress('images')}>
        <Text style={styles.text}>Images</Text>
      </Pressable>

      <Pressable
        style={() => selectedButton === 'videos' && styles.selectedButton}
        onPress={() => handleButtonPress('videos')}>
        <Text style={styles.text}>Videos</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 14,
    padding: 3,
  },
  selectedButton: {
    backgroundColor: '#3b6499',
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
