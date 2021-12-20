import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Akun, Cart, Home} from '../../src/screen';
import {BottomTabs} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabs {...props} />}>
      <Tab.Screen name="HOME" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="CART" component={Cart} options={{headerShown: false}} />
      <Tab.Screen name="AKUN" component={Akun} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Bottom}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
