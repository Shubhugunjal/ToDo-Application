import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Splash from './Splash'
import EntryScreen from './EntryScreen'
import CreateToDo from './CreateToDo'


const Stack = createNativeStackNavigator();


const screenOptions = {
  headerShown: true, 
  headerStyle: {
    backgroundColor: '#FF007F',
  },
  headerTitleStyle: {
    color: 'black', 
    fontWeight: 'bold', 
    fontSize: 22, 
  },
  headerTintColor: 'black', 
};

export default function EntryNavigScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='EntryScreen' component={EntryScreen} options={{ headerShown: false }} ></Stack.Screen>
        <Stack.Screen name='CreateToDo' component={CreateToDo} options={{...screenOptions}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}