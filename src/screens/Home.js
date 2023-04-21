import { useLayoutEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import List from '../components/List'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const { navigate, setOptions } = useNavigation()

    useLayoutEffect(() => {
        setOptions({
            headerRight: () => (
                    <Ionicons 
                        onPress={() => navigate('Add')}
                        name='add-circle-sharp'
                        size={35}
                        color='#181818'
                    />
                )
        })
    }, [])

  return (
    <View>
      <List/>
    </View>
  )
}


export default Home