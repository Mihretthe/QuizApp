import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { Login, SignIn , Home} from './pages';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './routes/Navigator';
import Choose from './components/Choose';
import AddQuestion from './pages/AddQuestion';


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


export default function App() {



  return (
   <Navigation />
    
    // <NavigationContainer>
    //   <Tab.Navigator screenOptions={screenOptions}>
    //     <Tab.Screen 
    //         name = " " 
    //         component = {SignIn} 
    //         options={{
    //           tabBarIcon : ({focused}) => {
    //             return (
    //               <View style = {{alignItems : "center", justifyContent : 'center'}}>
    //                 <FontAwesome name="sign-in" size={24} color={ focused ? '#16247d' : "#111"} />
    //                 <Text style = {{fontSize : 12, color : focused ? '#16247d' : '#111'}}>Sign In</Text>
    //             </View>
    //             )
    //           }
    //         }}
    //     />
    //     <Tab.Screen 
    //         name = "  " 
    //         component = {Login} 
    //         options={{
    //           tabBarIcon : ({focused}) => {
    //             return (
    //               <View style = {{alignItems : "center", justifyContent : 'center'}}>
    //                 <Entypo name="login" size={24} color={ focused ? '#16247d' : "#111"} />
    //                 <Text style = {{fontSize : 12, color : focused ? '#16247d' : '#111'}}>Login</Text>
    //             </View>
    //             )
    //           }
    //         }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
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
