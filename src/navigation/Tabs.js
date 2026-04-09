import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from '../screens/homescreen/HomePage';
import Categories from '../screens/categoriesscreen/Categories';
import Myclass from '../screens/myclass/Myclass';
import Stats from '../screens/Stats/Stats';
import Profile from '../screens/Profile/Profile';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#B0B0B0',

        tabBarStyle: {
          backgroundColor: '#ffffff', // Same as screen background
          borderTopWidth: 0, // REMOVE top border line
          elevation: 0, // REMOVE Android shadow
          shadowColor: 'transparent', // REMOVE iOS shadow
        },

        sceneContainerStyle: {
          backgroundColor: '#ffffff', // Same as tab background
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ size, color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../assets/images/home.png')}
                style={{
                  width: 20,
                  height: size,
                  tintColor: color,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({ size, color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../assets/images/category.png')}
                style={{
                  width: 20,
                  height: size,
                  tintColor: color,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="My Class"
        component={Myclass}
        options={{
          tabBarIcon: ({ size, color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../assets/images/graduation_cap.png')}
                style={{
                  width: 20,
                  height: size,
                  tintColor: color,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: ({ size, color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../assets/images/graph.png')}
                style={{
                  width: 20,
                  height: size,
                  tintColor: color,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../assets/images/user.png')}
                style={{
                  width: 20,
                  height: size,
                  tintColor: color,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
