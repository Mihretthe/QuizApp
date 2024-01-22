import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login, SignIn } from "../pages";
import AppContainer from "../components/AppContainer";

const Stack = createStackNavigator()

export default function Navigation() {
    return <NavigationContainer>
        <Stack.Navigator>
            
            <Stack.Screen name = "login" component={Login} />
            <Stack.Screen name = "Welcome" component={AppContainer} />
            <Stack.Screen name = "feed" component={Home} />
        </Stack.Navigator>

    </NavigationContainer>
}