import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default function EntryScreen() {

  const navigation = useNavigation()

  const handleCreateToDo = () => {
    navigation.navigate('CreateToDo');
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={require("../src/backimg.jpg")} style={styles.backgimg}>
        <Text style={styles.text}> Create To-Do List</Text>
        <View style={styles.inncontainer}>

          <TouchableOpacity style={styles.card} onPress={handleCreateToDo}>
            <FontAwesome name='sticky-note' style={{ color: '#FF007F', fontSize: 100 }} ></FontAwesome>
            <Text style={styles.cardtext}>Create Task</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <FontAwesome name='sticky-note' style={{ color: '#FF007F', fontSize: 100 }} ></FontAwesome>
            <Text style={styles.cardtext}>Edit Task</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgimg: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  inncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingTop: 100,
    alignItems: 'center',

  },
  card: {

    width: 150,
    height: 170,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardtext: {
    color: 'black',
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: '#FF007F',
    paddingHorizontal: 80,
    paddingTop: 80,
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'white', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 10, 
  },


})