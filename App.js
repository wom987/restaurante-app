import React from "react";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Description from "./screens/DescriptionView/Description";
import Product from "./screens/ProductView/Product";
import Car from "./screens/CarView/Car";
import Payment from "./screens/PaymentView/Payment";
import Home from "./screens/Home";
import Pedidos from "./screens/pedidos/Pedidos";
//auth screens
import LoginSCreen from "./screens/Auth/LoginScreen";
import RegisterScreen from "./screens/Auth/RegisterScreen";
import StartScreen from "./screens/StartScreen";
//Redux imports
import { createStore } from 'redux';
import { Provider } from "react-redux";
import reducer from "./src/reducers/reducer";
//setting the state

const store =createStore(reducer);

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator  initialRouteName="StartScreen">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pedidos"
          component={Pedidos}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Description"
          component={Description}
          options={{
            headerStyle: {
              backgroundColor: "#ffff",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTransparent: true,
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#ffff",
            },
          }}
        />
        <Stack.Screen
          name="Car"
          component={Car}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#ffff",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#ffff",
            },
          }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{
            headerStyle: {
              backgroundColor: "#ffff",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#ffff",
            },
          }}
        />
        <Stack.Screen
          name="LoginSCreen"
          component={LoginSCreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StartScreen"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
