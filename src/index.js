import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef, isMountedRef } from './RootNavigation';

import AuthNavigator from './config/navigation/auth.navigator';

const Stack = createStackNavigator();

export default function App() {
  React.useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);
  
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  );
}