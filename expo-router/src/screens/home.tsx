import { View, Button } from 'react-native'
import { router } from 'expo-router'

export function HomeScreen() {
  console.log('%cinit home screen', 'background: #000; color: #fff')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to next screen"
        onPress={() => router.navigate('another')}
      />
    </View>
  )
}
