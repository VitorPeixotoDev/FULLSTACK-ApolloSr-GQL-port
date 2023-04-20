import { gql, useQuery } from '@apollo/client'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'

import Card from './Card'

const GET_POSTS = gql`
    query GetPosts {
      posts {
            id
            title
            description
            author
            image
            likes
            createdAt
        }
    }
`

export default function List() {
    const { loading, error, data } = useQuery(GET_POSTS, {
        pollInterval: 500
    })

    if(loading) return <Text>Loading</Text>
    if(error) return <Text>error: {`${error}`}</Text>
    return(
        <SafeAreaView>
            <ScrollView
             contentContainerStyle={{
                //alignItems: 'center',
                paddingVertical: 30,
                backgroundColor: '#faf5f0'
             }}
            >
                <Text style={{
                    fontSize: 26, 
                    fontWeight: '900',
                    color: '#00000090'
                }}>This are the News</Text>
                {data.posts.map((post) => (<Card key={post.id} {...post}/>))}
            </ScrollView>
        </SafeAreaView>
    )
}