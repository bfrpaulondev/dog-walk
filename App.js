// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
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
