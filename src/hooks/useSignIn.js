import { useApolloClient, useMutation } from '@apollo/client';
import { USER_SIGNIN } from '../graphql/mutations';
// import { View } from 'react-native';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const {resetStore} = useApolloClient();
  const authStorage = useAuthStorage();
  const [signIn, result] = useMutation(USER_SIGNIN,
    {
      onError: (error) => {
        console.log(error.graphQLErrors[0].message)
      }
    });

  const checkUser = async (credential) => {
    const details = await signIn({variables: {credentials: credential}});
    await authStorage.storeInfo(details.data.authenticate.accessToken);
  
    await resetStore();
    return details;
  }
  
  // return await storage.getInfo();
  return [checkUser, result]
}

export default useSignIn;