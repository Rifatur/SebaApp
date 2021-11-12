import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { COLORS, SIZES } from './constants';

import MainLayout from './screens/Dashboard/MainLayout';
import SignUp from './screens/Dashboard/SignUp';
import Home from './screens/Dashboard/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './screens/Dashboard/Profile';
import DoctorDetails from './screens/Dashboard/DoctorDetails';
import Login from './screens/LoginScreen';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();
//const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MainStackScreen(){
  return(
  <Stack.Navigator screenOptions={{headerShown:false}}>

    <Stack.Screen name="Deshbord" component={Home}/>
    <Stack.Screen name="MainLayout" component={MainLayout}/>
    <Stack.Screen name="DoctorDetails" component={DoctorDetails}/>
    
  </Stack.Navigator>
  );
}

function BottomTabScreeen(){
  return(
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={MainStackScreen}/>
        <Tab.Screen name="Profile" component={Profile}/>
        
    </Tab.Navigator>
  );
}


function RootStackScreen() {
  return(
    <RootStack.Navigator screenOptions={{headerShown:false}}>
      <RootStack.Screen name="Login" component={Login}/>
      <RootStack.Screen name="MainStack" component={BottomTabScreeen}/>
      
    </RootStack.Navigator>
  );
}


const App = () =>{
  return(
    <NavigationContainer>
      <StatusBar 
      backgroundColor="transparent"
      translucent={true} 
      barStyle="dark-content"
      />

      <RootStackScreen/>

    </NavigationContainer>
  );
}
export default App;