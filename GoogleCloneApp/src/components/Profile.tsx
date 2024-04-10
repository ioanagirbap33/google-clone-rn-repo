import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {Colors} from '../utils/Colors';
import {useAuth} from '../contexts/authContext';

export const Profile = ({title}: any) => {
  const {userProfilePic, setUserProfilePic, logout, signIn} = useAuth();

  const handleSignIn = async () => {
    signIn();
  };

  const handleLogOut = () => {
    logout();
  };

  return (
    <>
      {userProfilePic ? (
        <View style={styles.container}>
          <Image
            style={styles.icon}
            source={require('../icons/notifications-icon.png')}
          />
          <Pressable onPress={handleLogOut}>
            <Image style={styles.image} source={{uri: userProfilePic}} />
          </Pressable>
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
