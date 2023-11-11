import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VectorIcons from './VectorIcons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:()=><VectorIcons name={'home'}/>}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{tabBarIcon:()=><VectorIcons name={'gear'}/>}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigation;