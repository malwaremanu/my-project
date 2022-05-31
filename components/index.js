import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function Index() {
  return (
    <View>
      <Text style={tw`bg-green-50 p-2`}>
          This is sample text from index page again.
      </Text>
    </View>
  );
}
