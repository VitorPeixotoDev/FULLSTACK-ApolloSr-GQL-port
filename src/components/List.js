import { gql, useQuery } from '@apollo/client'
import { View, Text } from 'react-native'

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
    const { loading, error, data } = useQuery(GET_POSTS)
    console.log(data)
    if(loading) return <Text>Loading</Text>
    if(error) return <Text>error: {`${error}`}</Text>
    return(
        <View>
            {data.posts.map((post) => (
                <View>
                    <Text>{post.title}</Text>
                </View>
            ))}
        </View>
    )
}