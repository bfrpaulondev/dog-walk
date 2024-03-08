// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './pages/IntroScreen/IntroScreen';
import LoginScreen from './pages/LoginScreen';
import RegistrationScreen from './pages/RegistrationScreen/RegistrationScreen';
import AuthConfirmationScreen from './pages/AuthConfirmationScreen';
import HomeScreen from './pages/HomeScreen';
import DashboardScreen from './pages/DashboardScreen';
import WalkScreen from './pages/WalkScreen';
import EndWalkScreen from './pages/EndWalkScreen';
import MyPetsScreen from './pages/MyPetsScreen';
import CommunityScreen from './pages/CommunityScreen';
import ProfileScreen from './pages/ProfileScreen';
import NearbyPeopleScreen from './pages/NearbyPeopleScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" component={IntroScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{headerShown:false}}  />
        <Stack.Screen name="AuthConfirmation" component={AuthConfirmationScreen} />
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

