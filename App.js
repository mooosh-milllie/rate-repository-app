import Main from './src/components/Main';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import Constants from 'expo-constants';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
const authStorage = new AuthStorage('user-information');
const apolloClient = createApolloClient(authStorage);

function App() {
  console.log("Their father!, Welcome to mobile development")
  console.log(Constants.manifest.extra.env)
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider >
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
}


export default App;