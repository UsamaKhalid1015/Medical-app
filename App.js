import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './src/navigation/MainNavigation';
import { BottomTabs } from 'react-native-screens';

export default function App() {
  console.log('My name is Usama and I am not a terrorist.');

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <MainNavigation />
      {/* <BottomTabs /> */}
    </SafeAreaProvider>
  );
}
