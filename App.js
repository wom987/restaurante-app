import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import Description from './screens/DescriptionView/Description';
import Product from './screens/ProductView/Product';
import Car from './screens/CarView/Car';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Product'
          component={Product}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Description"
          component={Description}
          options={{
            headerStyle: {
              backgroundColor: '#ffff',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTransparent: true,
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffff'
            },
          }}
        />
        <Stack.Screen
          name='Car'
          component={Car}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#ffff',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffff'
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
