import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import SelectRole from '../screens/SelectRole';
import { LoginStackParamList } from './types';

const Stack = createStackNavigator<LoginStackParamList>();

export function LoginNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'SelectRole'} component={SelectRole} />
    </Stack.Navigator>
  );
}
