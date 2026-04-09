import React from 'react';

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './src/navigation/MainNavigation';
export default function App() {
  console.log('App started successfully');

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <MainNavigation />
    </SafeAreaProvider>
  );
}
