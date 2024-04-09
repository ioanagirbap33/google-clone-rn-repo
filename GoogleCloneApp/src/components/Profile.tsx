import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {Colors} from '../utils/Colors';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';

export const Profile = ({title}: any) => {
  const [userProfilePic, setUserProfilePic] = useState<string>('');

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
      setUserProfilePic(re.user.photoURL!);
      console.log('picture' + userProfilePic);
    });
  };

  return (
    <>
      {userProfilePic ? (
        <View style={styles.container}>
          <Image
            style={styles.icon}
            source={require('../icons/notifications-icon.png')}
          />
          <Image style={styles.image} source={{uri: userProfilePic}} />
        </View>
      ) : (
        <Pressable
          onPress={handleSignIn}
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressedButton] : styles.button
          }>
          <View>
            <Text style={styles.text}>{title}</Text>
          </View>
        </Pressable>
      )}
    </>
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
