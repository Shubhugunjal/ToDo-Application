import { View, TextInput, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Animated, Text } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CreateToDo() {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('Task');
        if (storedTasks) {
          const parsedTasks = JSON.parse(storedTasks);
          setTaskArray(parsedTasks);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchData();
  }, []);

  // ADD TASK Button 
  const [taskArray, setTaskArray] = useState([]) 
  const [inputvalue, setInputValue] = useState('')

  const handleAddTask = () => {

    if (inputvalue.trim() === '') {
      console.log("its should not ne null")
      return
    }

    var TaskArrayObject = {
      description: inputvalue
    }

    const updatetask = [...taskArray, TaskArrayObject]

    AsyncStorage.setItem("Task", JSON.stringify(updatetask))

    setTaskArray(updatetask);
    setInputValue('')
  }


  //delet Task
  const removeTask = (removetext) => {
    const updateTask = taskArray.filter((task) => task.description !== removetext);
    setTaskArray(updateTask)

    AsyncStorage.setItem('Task', JSON.stringify(updateTask));
  }

 



  function ShowList({ text, removeTask }) {
    return (
      <View style={styles.item}>

        <Text style={styles.itemText}>{text}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => removeTask(text)}>
          <Text>Remove Task</Text>
        </TouchableOpacity>



      </View>

    )
  };


  return (
    <ImageBackground source={require("../src/backimg.jpg")} style={styles.backgimg}>
      <View style={styles.container}>
        <View style={styles.ineercont} >
          <TextInput
            style={styles.input}
            placeholder="Enter your Task"
            value={inputvalue}
            onChangeText={setInputValue}>
          </TextInput>
        </View>

        <View style={styles.btncontainer}>
          <Animated.View style={[styles.btn, { opacity: fadeAnim }]}>
            <TouchableOpacity style={styles.btn} onPress={handleAddTask} >
              <Text style={styles.btntext}> Add Task</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <ScrollView style={styles.showlist}>

          {
            taskArray.map((item, index) => {
              return (<ShowList key={index} text={item.description} removeTask={()=>{removeTask(item.description)}} />);
            })
          }
        </ScrollView>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  backgimg: {
    flex: 1,
    resizeMode: 'cover'
  },
  ineercont: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',

  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 18
  },
  btncontainer: {

    marginTop: 20,
    marginBottom: 50,
    paddingHorizontal: 80

  },
  btn: {
    height: 40,
    backgroundColor: '#FF007F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  btntext: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 18

  },

  showlist: {
    marginHorizontal: 10,
  },
  listitems: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textlist: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,

  },

  itemText: {
    maxWidth: '100%',
    fontSize: 16
  },

});