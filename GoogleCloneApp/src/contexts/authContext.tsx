import {createContext, useContext, useState, ReactNode, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  userProfilePic: string;
  setUserProfilePic: React.Dispatch<React.SetStateAction<string>>;
  signIn: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [userProfilePic, setUserProfilePic] = useState<string>('');

  useEffect(() => {
    const userState = async () => {
      try {
        const savedProfilePic = await AsyncStorage.getItem('userProfilePic');
        if (savedProfilePic) {
          setUserProfilePic(savedProfilePic);
        }
      } catch (error) {
        console.error('Error restoring state from AsyncStorage:', error);
      }
    };
    userState();
  }, []);

  GoogleSignin.configure({
    webClientId:
      '797814484120-n0s7cviaqijc55ag1tli75q8o6u354cm.apps.googleusercontent.com',
  });

  const signIn = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in.then(re => {
      setUserProfilePic(re.user.photoURL!);
      AsyncStorage.setItem('userProfilePic', re.user.photoURL!);
    });
  };

  const logout = async () => {
    try {
      await GoogleSignin.signOut();
      await auth().signOut();
      setUserProfilePic('');
      console.log('User signed out!');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{userProfilePic, setUserProfilePic, signIn, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
