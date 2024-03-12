// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen  from './src/pages/IntroScreen/IntroScreen';
import LoginScreen from './src/pages/LoginScreen/LoginScreen';
import RegistrationScreen from './src/pages/RegistrationScreen/RegistrationScreen';
import HomeScreen from './src/pages/HomeScreen/HomeScreen';
import WalkScreen from './src/pages/WalkScreen/WalkScreen';
import EndWalkScreen from './src/pages/EndWalkScreen/EndWalkScreen';
import MyPetsScreen from './src/pages/MyPetsScreen/MyPetsScreen';
import ProfileScreen from './src/pages/ProfileScreen/ProfileScreen';
import NearbyPeopleScreen from './src/pages/NearbyPeopleScreen/NearbyPeopleScreen';
import DashboardScreen from './src/pages/DashboardScreen/DashboardScreen';
import CommunityScreen from './src/pages/CommunityScreen/CommunityScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" component={IntroScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{headerShown:false}}  />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Walk" component={WalkScreen} />
        <Stack.Screen name="EndWalk" component={EndWalkScreen} />
        <Stack.Screen name="MyPets" component={MyPetsScreen} />
        <Stack.Screen name="Community" component={CommunityScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="NearbyPeople" component={NearbyPeopleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

