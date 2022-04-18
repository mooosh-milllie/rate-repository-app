import { useQuery } from '@apollo/client';
import { FlatList, View, Text } from 'react-native';
import { GET_REPOSITORIES } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
  
const RepositoryList = () => {
  const repositories = useQuery(GET_REPOSITORIES);

  if (repositories.loading) {
    
    return <View><Text>Loading....</Text></View>
  }
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.data.repositories.edges.map(edge => edge.node)
    : [];
  const renderItem = ({ item }) => {
    return (
    
    <View>
      <RepositoryItem key={item.id}  title={item} />
    </View>
  )};
  return (
    <FlatList
      data={repositoryNodes}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};


export default RepositoryList;