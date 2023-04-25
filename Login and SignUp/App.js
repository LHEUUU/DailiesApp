import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import ScreenInicial from './Screens/ScreenInicial';
import SignUpScreen from './Screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, cardStyleInterpolator: forFade,}}>
        <Stack.Screen 
          name='Inicial'
          component={ScreenInicial}
        />
        <Stack.Screen 
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen 
          name='SignUp'
          component={SignUpScreen}
        />
        <Stack.Screen 
          name='Home'
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};