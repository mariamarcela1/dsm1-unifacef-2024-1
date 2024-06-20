import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './style'
import Post from './componentes/post'

const Home = ({ navigation }) => {
  const stories = [
    { id: '1', type: 'story', source: require('../assets/mariamarcela.jpeg'), name: 'Seu story' }, 
    { id: '2', type: 'story', source: require('../assets/unifacef.jpeg'), name: 'unifacef' },
    { id: '3', type: 'story', source: require('../assets/spotify.jpeg'), name: 'spotify' },
    { id: '4', type: 'story', source: require('../assets/eddydata.jpeg'), name: 'eddydata' },
  ];

  const posts = [
    {
      id: 'p1',
      type: 'post',
      profileImage: require('../assets/mariamarcela.jpeg'),
      profileName: 'mariamarcela_',
      postImage: require('../assets/1.png'),
      likes: 259,
      description: 'teste',
    },
    {
      id: 'p2',
      type: 'post',
      profileImage: require('../assets/unifacef.jpeg'),
      profileName: 'unifacef',
      postImage: require('../assets/2.png'), 
      likes: 314,
      description: 'Venha participar do Hackthon!',
    },
    {
      id: 'p3',
      type: 'post',
      profileImage: require('../assets/spotify.jpeg'),
      profileName: 'spotify',
      postImage: require('../assets/3.png'), 
      likes: 400,
      description: 'Atualize sua playlist com os novos sucessos.',
    },
  ]

  const data = [
    { id: 'header', type: 'header' },
    { id: 'stories', type: 'stories', stories },
    ...posts,
  ]

  const renderStoryItem = ({ item }) => {
    if (item.id === '1') {
      return (
        <TouchableOpacity style={styles.story}>
          <View style={styles.myStory}>
            <Image source={item.source} style={styles.myStoryImage} />
            <View style={styles.addIconContainer}>
              <AntDesign name="pluscircle" size={18} color="#0095f6" />
            </View>
          </View>
          <Text style={styles.storyText} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={styles.story}>
          <LinearGradient
            colors={['#8a3ab9', '#fbad50']}
            style={styles.storyGradient}
          >
            <View style={styles.storyImageContainer}>
              <Image source={item.source} style={styles.storyImage} />
            </View>
          </LinearGradient>
          <Text style={styles.storyText} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
        </TouchableOpacity>
      )
    }
  }

  const renderItem = ({ item }) => {
    if (item.type === 'header') {
      return (
        <View style={styles.header}>
          <Image
            source={require('../assets/Instagram-Logo-removebg-preview.png')}
            style={styles.logo}
          />
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <AntDesign name="hearto" size={20} color="black" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MessagesScreen')}>
              <FontAwesome name="send-o" size={20} color="black" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      )
    } else if (item.type === 'stories') {
      return (
        <FlatList
          data={item.stories}
          renderItem={renderStoryItem}
          keyExtractor={story => story.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storiesContainer}
        />
      )
    } else if (item.type === 'post') {
      return <Post post={item} />
    }
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  )
}

export default Home
