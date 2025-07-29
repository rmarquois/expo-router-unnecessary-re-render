import { Button } from '@react-navigation/elements';
import { View } from 'react-native';

export function IndexScreen() {
  console.log('%cinit index screen', 'background: #222; color: #bada55')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button screen="AnotherScreen">Go to next screen</Button>
    </View>
  );
}
