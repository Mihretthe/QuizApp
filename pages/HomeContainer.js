import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { Login, SignIn, Home } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()
const screenOptions = {
  tabBarShowLabel : false,
  headerShow : false,
  tabBarStyle : {
    position : "absolute",
    bottom : 0,
    right : 0,
    left : 0,
    elevation : 0,
    height : 60,
    background : 'blue'    
  }

}

export default function HomeContainer() {
  return (

    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
            name = "feed" 
            component = {Home} 
            options={{
              tabBarIcon : ({focused}) => {
                return (
                  <View style = {{alignItems : "center", justifyContent : 'center'}}>
                    <FontAwesome name="home" size={24} color={ focused ? '#16247d' : "#111"} />
                    <Text style = {{fontSize : 12, color : focused ? '#16247d' : '#111'}}>Sign In</Text>
                </View>
                )
              }
            }}
        />
        <Tab.Screen 
            name = "profile" 
            component = {Home} 
            options={{
              tabBarIcon : ({focused}) => {
                return (
                  <View style = {{alignItems : "center", justifyContent : 'center'}}>
                    <Entypo name="profile" size={24} color={ focused ? '#16247d' : "#111"} />
                    <Text style = {{fontSize : 12, color : focused ? '#16247d' : '#111'}}>Login</Text>
                </View>
                )
              }
            }}
        />
        <Tab.Screen 
            name = "rank" 
            component = {Home} 
            options={{
              tabBarIcon : ({focused}) => {
                return (
                  <View style = {{alignItems : "center", justifyContent : 'center'}}>
                    <Entypo name="rank" size={24} color={ focused ? '#16247d' : "#111"} />
                    <Text style = {{fontSize : 12, color : focused ? '#16247d' : '#111'}}>Login</Text>
                </View>
                )
              }
            }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding : 60
  },
});
