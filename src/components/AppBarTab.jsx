import { Pressable, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  textMargin: {
    marginRight: theme.TabSpacing.right
  }
}) 

const AppBarTab = () => {
  return (
    <View>
      <Pressable>
        <Link to='/'>
          <Text color={'white'} fontSize='subheading' fontWeight={'bold'} style={styles.textMargin}>
            Repositories
          </Text>
        </Link>
      </Pressable>
    </View>
  );
}

export default AppBarTab;