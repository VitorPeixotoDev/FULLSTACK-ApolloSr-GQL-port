import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Navigator, Screen } = createNativeStackNavigator()
import { ApolloClient,
         InMemoryCache,
         ApolloProvider,
         gql,
         useQuery} from '@apollo/client'

import Home from './src/screens/Home';
import Add from './src/screens/Add';         

const client = new ApolloClient({
  uri: 'http://10.0.0.120:4000/',
  cache: new InMemoryCache()
})

const Routes = () => {
  return(
    <NavigationContainer>
      <Navigator>
        <Screen 
          name='Home' 
          component={Home}
          options={{
            title: 'This are the News'
          }}
        />
        <Screen name='Add' component={Add}/>
      </Navigator>
    </NavigationContainer>
  )
}


const App = () => {
  return (
    <ApolloProvider client={client}>
      <StatusBar style="auto" />
      <Routes/>
    </ApolloProvider>  
  );
}

export default App
