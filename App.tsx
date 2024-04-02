import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Details } from './screens/Details';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Nasze Punkty' component={Home} />
        <Stack.Screen name='Szczegóły' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}