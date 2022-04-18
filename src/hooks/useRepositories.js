import { useQuery } from '@apollo/client';
import {useState, useEffect} from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const UseRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false)
  const response = useQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: "cache-and-network"
    });

  const fetchRepositories = () => {
    if ( response.loading) {
      setLoading(true)
    } else {
      setLoading(false)
    }

    setRepositories(response);
  };

  useEffect(() => {
    try {
      fetchRepositories();
    } catch (error) {
      console.log(error)
    }
  }, []);

  
  return { repositories, loading, refetch: fetchRepositories };
}

export default UseRepositories;