import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
  storiesContainer: {
    paddingHorizontal: 10,
  },
  story: {
    alignItems: 'center',
    width: 80,
    marginHorizontal: 5, 
  },
  storyGradient: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyImageContainer: {
    width: 64, 
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  myStoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  myStory: {
    position: 'relative',
    alignItems: 'center',
  },
  addIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  storyText: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    maxWidth: 70,
  },
  flatListContentContainer: {
    paddingBottom: 60,
  },
});

export default styles;
