import { useApolloClient, useQuery } from '@apollo/client';
import { Pressable, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { VERIFY_LOGGEDIN } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';
import theme from '../theme';
import Text from './Text';
const styles = StyleSheet.create({
  textMargin: {
    marginRight: theme.TabSpacing.right
  },
})

const SignInTab = () => {
  const {resetStore} = useApolloClient();
  const removeAuth = useAuthStorage();
  const signedIn = useQuery(VERIFY_LOGGEDIN);
  if (signedIn.loading) {
    return null
  }
  const logOut = async() => {
    try {
      await removeAuth.removeInfo();
      await resetStore();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View>
      {
        signedIn.data.me ? null : (<Pressable>
        <Link to='/signin'>
          <Text color={'white'} fontSize='subheading' fontWeight={'bold'} style={styles.textMargin}>
            Sign in
          </Text>
        </Link>
        </Pressable>)
      }
      {
        signedIn.data.me ?(<Pressable onPress={logOut}>
          <Text color={'white'} fontSize='subheading' fontWeight={'bold'} style={styles.textMargin}>
            Sign out 
          </Text>
        </Pressable>): null
      }
    </View>
  );
}

export default SignInTab;