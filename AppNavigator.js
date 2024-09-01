import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'; // Adjust import path as needed
import ReportsScreen from './ReportsScreen'; // Adjust import path as needed
import StudentsScreen from './StudentsScreen'; // Adjust import path as needed
import MoreScreen from './MoreScreen'; // Adjust import path as needed
import LoginScreen from './LoginScreen'; // Adjust import path as needed
import PrivacyPolicyScreen from './PrivacyPolicyScreen'; // Adjust import path as needed

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hide header for bottom tabs
        tabBarStyle: { height: 60 },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Reports" component={ReportsScreen} />
      <Tab.Screen name="Students" component={StudentsScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        cardStyleInterpolator: ({ current, layouts }) => ({
          cardStyle: {
            transform: [
              {
                translateX: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.width, 0],
                }),
              },
            ],
          },
        }),
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen 
        name="PrivacyPolicyScreen" 
        component={PrivacyPolicyScreen} 
        options={{ title: 'Privacy Policy' }} // Adds a header with a back button
      />
    </Stack.Navigator>
  );
}