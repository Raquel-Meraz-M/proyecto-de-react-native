import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import PerfilScreen from '../screens/PerfilScreen'; // Asume que 'Perfil' es el nombre de tu componente de perfil
import CarritoScreen from '../screens/CarritoScreen';

// Crea un stack de navegación nativa
const Stack = createNativeStackNavigator();

// Crea un navegador de pestañas en la parte inferior
const Tab = createBottomTabNavigator();

// Componente que define las pestañas de la pantalla de inicio
function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Principal" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Carrito" component={CarritoScreen} />
    </Tab.Navigator>
  );
}

// Componente principal del navegador de la aplicación
export default function AppNavigator() {
  return (
    <Stack.Navigator>
      {/* Pantalla de inicio de sesión */}
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      {/* Pantalla principal con las pestañas */}
      <Stack.Screen name="Home" component={HomeTabs} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
