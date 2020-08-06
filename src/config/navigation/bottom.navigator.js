import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import design from '../color';

const Tab = createMaterialBottomTabNavigator();

import Home from '../../screens/home';
import Profile from '../../screens/profile';
import Animals from '../../screens/animals';
import About from '../../screens/about';


class BottomNavigator extends Component {
    render() {
        return (
            <Tab.Navigator
                activeColor="#f0edf6"
                barStyle={{
                    backgroundColor: design.header
                }}>
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: () => (
                        <Icon name="home" size={26} color="#ffffff" />
                    ),
                }} />

                <Tab.Screen name="Profile" component={Profile} options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: () => (
                        <Icon name="account" size={26} color="#ffffff" />
                    ),
                }} />

                <Tab.Screen name="Animals" component={Animals} options={{
                    tabBarLabel: 'Animais',
                    tabBarIcon: () => (
                        <Icon name="dog-side" size={26} color="#ffffff" />
                    ),
                }} />
                <Tab.Screen name="About" component={About} options={{
                    tabBarLabel: 'Sobre',
                    tabBarIcon: () => (
                        <Icon name="information" size={26} color="#ffffff" />
                    ),
                }} />
            </Tab.Navigator>
        );
    }
}

export default BottomNavigator;