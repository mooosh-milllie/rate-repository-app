// import Constants from 'expo-constants';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import theme, { SafeArea } from '../theme';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
    fontFamily: theme.fontFamily.font
  },
});

const Main = () => {
  return (

    <SafeAreaView style={SafeArea.AndroidSafeArea}>
      <View style={styles.container}>
        <AppBar/>
        <Routes>
          <Route path="/" element={<RepositoryList />} exact />
          <Route path='/signin' element={<SignIn/>} exact/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </View>
    </SafeAreaView>
  );
};

export default Main;