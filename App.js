import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppStacks from './stacks/AppStacks';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppStacks />
    </NavigationContainer>
  );
}