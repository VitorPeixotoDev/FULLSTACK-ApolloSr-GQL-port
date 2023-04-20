import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient,
         InMemoryCache,
         ApolloProvider,
         gql,
         useQuery} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://10.0.0.120:4000/',
  cache: new InMemoryCache()
})

import List from './src/components/List';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Cats</Text>
        <List/>
      </View>
    </ApolloProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
