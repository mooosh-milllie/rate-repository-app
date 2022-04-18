import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import SignInTab from './SignInTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabBgColor,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row'
  },
  // ..
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab/>
      <SignInTab/>
    </ScrollView>  
  </View>;
};

export default AppBar;