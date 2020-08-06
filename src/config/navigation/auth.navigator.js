import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/login';
import SignIn from '../../screens/signin';
import SignUp from '../../screens/signup';
import RecoverPassword from '../../screens/recoverpassword';
import Comments from '../../screens/home/screens/comment';
import BottomNavigator from './bottom.navigator';
import AnimalDetail from '../../screens/animals/screens/detail';
import AnimalGallery from '../../screens/animals/screens/gallery';

import design from '../color';
const Stack = createStackNavigator();

const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="SignIn" component={SignIn} options={{
      headerStyle: {
        backgroundColor: design.header,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      title: "Acessar"
    }} />
    <Stack.Screen name="Register" component={SignUp} options={{
      headerStyle: {
        backgroundColor: design.header,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      title: "Criar conta"
    }} />
    <Stack.Screen name="RecoverPassword" component={RecoverPassword} options={{
      headerStyle: {
        backgroundColor: design.header,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      title: "Recuperar senha"
    }} />
    <Stack.Screen name="Indice" component={BottomNavigator} options={{
      headerStyle: {
        backgroundColor: design.header,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: false,
      title: "Apams"
    }} />
    <Stack.Screen name="AnimalDetail" component={AnimalDetail} options={{
      headerStyle: {
        backgroundColor: design.header,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      title: "Perfil Animal"
    }} />
    <Stack.Screen name="AnimalGallery" component={AnimalGallery} options={{
      headerStyle: {
        backgroundColor: design.header,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      title: "Galeria de Fotos"
    }} />
    <Stack.Screen name="Comments" component={Comments} options={{
      headerStyle: {
        backgroundColor: design.header,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      title: "Comentários"
    }} />
  </Stack.Navigator>
);

export default AuthNavigator;