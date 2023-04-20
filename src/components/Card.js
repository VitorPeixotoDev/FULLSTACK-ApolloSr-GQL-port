import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { useMutation, gql } from '@apollo/client'
import moment from 'moment/moment'

const LIKE_POST = gql`
  mutation LikePost($likePostId: Int!) {
    likePost(id: $likePostId)
}
`

const Card = ({
  id,
  title,
  description,
  author,
  likes,
  createdAt,
  image}) => {
  
  
  const [likePost] = useMutation(LIKE_POST, {
    variables: {
      likePostId: id,
    },
    onCompleted: (data) => {console.log(data)}
  })

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
            style={styles.image}
            source={{ uri: image }}
        />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>likes {likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={likePost} style={styles.button}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>👍 </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#00000030',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginVertical: 20
  },
  title: {
    color: '#181818',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },
  image: {
    width: '100%',
    height: 230,
    borderRadius: 6,
  },
  button: {
    backgroundColor: '#CDC5FF',
    width: '45%',
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  description: {
    color: '#181818',
    fontSize: 16,
  }
})

export default Card