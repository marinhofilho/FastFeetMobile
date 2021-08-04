import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
// https://reactnavigation.org/docs/status-bar/

import Dashboard from '~/pages/Dashboard';
import OrderDetails from '~/pages/Order/OrderDetails';
import OrderReportProblem from '~/pages/Order/OrderReportProblem';
import OrderListProblem from '~/pages/Order/OrderListProblem';
import OrderConfirm from '~/pages/Order/OrderConfirm';

const Stack = createStackNavigator();

export default function Order() {
  return (
    <>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerTitleStyle: {fontSize: 18},
          headerTransparent: true,
        }}
        initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          headerLeft={({navigation}) => ({
            onPress: navigation.goBack(),
          })}
          options={{
            title: 'Detalhes do Pedido',
          }}
          name="OrderDetails"
          component={OrderDetails}
        />
        <Stack.Screen
          headerLeft={({navigation}) => ({
            onPress: navigation.goBack(),
          })}
          options={{
            title: 'Informar Problema',
          }}
          name="OrderReportProblem"
          component={OrderReportProblem}
        />
        <Stack.Screen
          headerLeft={({navigation}) => ({
            onPress: navigation.goBack(),
          })}
          options={{
            title: 'Visualizar Problemas',
          }}
          name="OrderListProblem"
          component={OrderListProblem}
        />
        <Stack.Screen
          headerLeft={({navigation}) => ({
            onPress: navigation.goBack(),
          })}
          options={{
            title: 'Confirmar Entrega',
          }}
          name="OrderConfirm"
          component={OrderConfirm}
        />
      </Stack.Navigator>
    </>
  );
}
