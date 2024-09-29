import Home from "./src/screens/main";
import { useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return <>
    <StatusBar barStyle="light-content" backgroundColor="#8A19D6" />
    <Home />

  </>
}


