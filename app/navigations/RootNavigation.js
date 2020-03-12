import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import MapsScreen from '../screens/MapsScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ ...TransitionPresets.ModalSlideFromBottomIOS }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Maps"
        component={MapsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { RootNavigator };
