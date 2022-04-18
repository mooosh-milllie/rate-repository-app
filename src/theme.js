import { StyleSheet, Platform, StatusBar } from "react-native";
export const SafeArea = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    white: '#fff',
    tabBgColor: '#24292e'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  TabSpacing: {
    right: 10,
    left: 10
  },
  fontFamily: {
    font: Platform.OS === 'android'? 'Roboto' : 'Arial'
  }
};

export default theme;