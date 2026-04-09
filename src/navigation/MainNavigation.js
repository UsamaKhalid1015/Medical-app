import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Login from '../screens/login/Login';
import RecoveryPassword from '../screens/recoverypassword/RecoveryPassword';
import Verification from '../screens/verification/Verification';
import CreatePassword from '../screens/createnewpassword/CreatePassword';
import ActivelyWorking from '../screens/activelyworking/ActivelyWorking';
import RolePractice from '../screens/rolepractice/RolePractice';
import CurrentlyWorking from '../screens/currentlyworking/CurrentlyWorking';
import StateCountry from '../screens/statecountry/StateCountry';
import YourCertification from '../screens/yourcertification/YourCertification';
import Cardiac from '../screens/cardiac/Cardiac';
import HomePage from '../screens/homescreen/HomePage';
import PossibleCause from '../screens/possiblecauses/PossibleCauses';
import Correct from '../screens/correctscreen/Correct';
import Wrong from '../screens/wrongscreen/Wrong';
import Scenario from '../screens/scenarioscreen/Scenario';
import Certifications from '../screens/certifications/Certifications';
import EditCertifications from '../screens/editcertifications/EditCertifications';
import BottomTabs from './Tabs';
import TraumaEmergencies from '../screens/traumaemergencies/TraumaEmergencies';
import NewCertifications from '../screens/addnewcertifications/NewCertifications';
import ProfileSetting from '../screens/profilesetting/ProfileSetting';
import Categories from '../screens/categoriesscreen/Categories';
import SignUp from '../screens/signup/SignUp';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="signup"
        screenOptions={{ headerShown: false }}
      >
        {/* Auth & Pre-tab Screens */}
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="recoverypassword" component={RecoveryPassword} />
        <Stack.Screen name="verification" component={Verification} />
        <Stack.Screen name="createnewpassword" component={CreatePassword} />
        <Stack.Screen name="activelyworking" component={ActivelyWorking} />
        <Stack.Screen name="rolepractice" component={RolePractice} />
        <Stack.Screen name="currentlyworking" component={CurrentlyWorking} />
        <Stack.Screen name="statecountry" component={StateCountry} />
        <Stack.Screen name="yourcertification" component={YourCertification} />
        <Stack.Screen name="Cardiac" component={Cardiac} />
        <Stack.Screen name="possiblecauses" component={PossibleCause} />
        <Stack.Screen name="correctscreen" component={Correct} />
        <Stack.Screen name="wrongscreen" component={Wrong} />
        <Stack.Screen name="scenarioscreen" component={Scenario} />
        <Stack.Screen name="traumaemergencies" component={TraumaEmergencies} />
        <Stack.Screen name="certifications" component={Certifications} />
        <Stack.Screen name="categoriesscreen" component={Categories} />
        <Stack.Screen name="homescreen" component={HomePage} />
        <Stack.Screen
          name="editcertifications"
          component={EditCertifications}
        />
        <Stack.Screen
          name="addnewcertifications"
          component={NewCertifications}
        />
        <Stack.Screen name="profilesetting" component={ProfileSetting} />

        {/* Main App Tabs */}
        <Stack.Screen name="Tabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
