import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../utils/Colors';

const handleSignIn = () => {
  console.log('Pressed');
};

export const Button = ({title}: any) => {
  return (
    <Pressable
      onPress={handleSignIn}
      style={({pressed}) =>
        pressed ? [styles.button, styles.pressedButton] : styles.button
      }>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.button,
    padding: 8,
    borderRadius: 8,
  },
  pressedButton: {
    opacity: 0.75,
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
});
