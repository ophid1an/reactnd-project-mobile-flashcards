import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import { blue } from './utils/colors';
import DecksList from './components/DecksList'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'


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

const store = createStore(reducer)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{flex: 1}}>
          <StatusBar />
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: blue,
              },
              headerTitleAlign: 'center',
            }}
          >
            <Stack.Screen name="TabNavigator" component={TabNavigator} 
              options={{headerShown: false}} 
            />
            <Stack.Screen name="Deck" component={Deck} 
              options={({ route }) => ({
                 title: route.params.title
              })}
            />
            <Stack.Screen name="NewQuestion" component={NewQuestion} 
              options={{title: 'Add Card'}}
            />
            <Stack.Screen name="Quiz" component={Quiz} 
              options={({ route }) => ({
                 title: `Quiz - ${route.params.title}`
              })}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}

