import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/homescreen/HomePage';
import Categories from '../screens/categoriesscreen/Categories';
import Myclass from '../screens/myclass/Myclass';
import Stats from '../screens/Stats/Stats';
import Profile from '../screens/Profile/Profile';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false, // hides top header
          tabBarIcon: ({ size, color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../assets/images/home.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: 'black', // icon will always be black
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false, // hides top header
          tabBarIcon: ({ size, color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../assets/images/category.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: 'black', // icon will always be black
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Class"
        component={Myclass}
        options={{
          headerShown: false, // hides top header
          tabBarIcon: ({ size, color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../assets/images/graduation-cap.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: 'black', // icon will always be black
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          headerShown: false, // hides top header
          tabBarIcon: ({ size, color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../assets/images/graph.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: 'black', // icon will always be black
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false, // hides top header
          tabBarIcon: ({ size, color }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../assets/images/user.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: 'black', // icon will always be black
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
