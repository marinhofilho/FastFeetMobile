import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Profile from '~/pages/Profile';
import Order from './Order';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="Order"
      unmountOnBlur
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999',
        labelStyle: {
          fontSize: 14,
        },
        tabStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: 'rgba(255,255,255,0.07)',
          paddingTop: 5,
          paddingBottom: 5,
          shadowColor: '#000',
        },
      }}>
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({color}) => (
            <Icon name="reorder" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({color}) => (
            <Icon name="account-circle" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
