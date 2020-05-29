import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { blue } from './utils/colors';
import DecksList from './components/DecksList'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'


const Tab = createMaterialTopTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 25 },
        style: { backgroundColor: blue },
      }}
    >
      <Tab.Screen name="DecksList" component={DecksList} 
        options={{title: 'Decks'}} 
      />
      <Tab.Screen name="NewDeck" component={NewDeck} 
        options={{title: 'New Deck'}} 
      />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar />
        <Stack.Navigator>
          <Stack.Screen name="TabNavigator" component={TabNavigator} 
            options={{headerShown: false}} 
          />
          <Stack.Screen name="Deck" component={Deck} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

