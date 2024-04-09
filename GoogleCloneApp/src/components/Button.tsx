import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../utils/Colors';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const Button = ({title}: any) => {
  GoogleSignin.configure({
    webClientId:
      '797814484120-n0s7cviaqijc55ag1tli75q8o6u354cm.apps.googleusercontent.com',
  });

  const handleSignIn = async () => {
    console.log('Pressed');
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in.then(re => {
      console.log(re.user);
    });
  };

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
