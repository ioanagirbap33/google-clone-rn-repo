import {View, Text, StyleSheet, Pressable, Image, Button} from 'react-native';
import {Profile} from './Profile';

interface HeaderProps {
  selectedButton: string;
  handleButtonPress: (button: string) => void;
}

export const Header = ({selectedButton, handleButtonPress}: HeaderProps) => {
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
          <Image
            style={styles.icon}
            source={require('../icons/menu-icon.png')}
          />
          <Profile title="Sign in" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerSides: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },

  selectedButton: {
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
