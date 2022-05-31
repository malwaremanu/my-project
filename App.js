import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Index from './components';


export default function App() {
  return (
    <View style={tw`p-2 mt-10 text-xl bg-green-400 text-center`}>
      <Text style={tw`text-xl p-2 font-semibold`}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Index />
    </View>
  );
}