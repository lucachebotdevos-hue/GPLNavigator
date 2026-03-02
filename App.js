import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

import MapScreen from './src/screens/MapScreen';
import TeslaModeScreen from './src/screens/TeslaModeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#0a0f1e', borderBottomColor: '#1a2040' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '800' },
          tabBarStyle: {
            backgroundColor: '#0d1225',
            borderTopColor: '#1a2040',
            borderTopWidth: 1,
            paddingBottom: 4,
            height: 58,
          },
          tabBarActiveTintColor: '#7c4dff',
          tabBarInactiveTintColor: '#555',
          tabBarIcon: ({ color, size, focused }) => {
            const icons = {
              Carte: focused ? 'map' : 'map-outline',
              'Mode Tesla': focused ? 'navigate' : 'navigate-outline',
              Paramètres: focused ? 'settings' : 'settings-outline',
            };
            return <Ionicons name={icons[route.name]} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Carte"
          component={MapScreen}
          options={{ title: '⛽ GPL Navigator' }}
        />
        <Tab.Screen
          name="Mode Tesla"
          component={TeslaModeScreen}
          options={{ title: '🚗 Mode Tesla GPL' }}
        />
        <Tab.Screen
          name="Paramètres"
          component={SettingsScreen}
          options={{ title: '⚙️ Mon Véhicule' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
