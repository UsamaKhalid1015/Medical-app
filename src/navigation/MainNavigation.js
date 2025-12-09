import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Auth & other screens
import SignUp from '../screens/signup/SignUp';
import LogIn from '../screens/LogIn';
import RecoveryPassword from '../screens/recoverypassword/RecoveryPassword';
import Verification from '../screens/verification/Verification';
import CreatePassword from '../screens/createnewpassword/CreatePassword';
import ActivelyWorking from '../screens/activelyworking/ActivelyWorking';
import RolePractice from '../screens/rolepractice/RolePractice';
import CurrentlyWorking from '../screens/currentlyworking/CurrentlyWorking';
import StateCountry from '../screens/statecountry/StateCountry';
import YourCertification from '../screens/yourcertification.js/YourCertification';
import Cardiac from '../screens/cardiac/Cardiac';
import HomePage from '../screens/homescreen/HomePage';
import PossibleCause from '../screens/possiblecauses/PossibleCauses';
// Bottom Tabs
import BottomTabs from './Tabs';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="signup"
        screenOptions={{ headerShown: false }}
      >
        {/* Screens WITHOUT bottom tabs */}
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="login" component={LogIn} />
        <Stack.Screen name="recoverypassword" component={RecoveryPassword} />
        <Stack.Screen name="verification" component={Verification} />
        <Stack.Screen name="createnewpassword" component={CreatePassword} />
        <Stack.Screen name="activelyworking" component={ActivelyWorking} />
        <Stack.Screen name="rolepractice" component={RolePractice} />
        <Stack.Screen name="currentlyworking" component={CurrentlyWorking} />
        <Stack.Screen name="statecountry" component={StateCountry} />
        <Stack.Screen name="yourcertification" component={YourCertification} />
        <Stack.Screen name="Cardiac" component={Cardiac} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="possiblecauses" component={PossibleCause} />
        {/* Screens WITH bottom tabs */}
        <Stack.Screen name="Tabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
