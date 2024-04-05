import {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

export const Header = () => {
  const [selectedButton, setSelectedButton] = useState('');

  const handleButtonPress = (buttonType: string) => {
    setSelectedButton(buttonType);
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerSides}>
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
        </View>
        <View style={styles.headerSides}>
          <Text>N</Text>
          <Text>M</Text>
          <Text>P</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerSides: {
    flexDirection: 'row',
    gap: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },

  selectedButton: {
    borderBottomWidth: 1,
    borderColor: 'white', // sau culoarea dorită pentru bordură
  },
});
