import { View, Button } from 'react-native'
import { router } from 'expo-router'

export default function IndexScreen() {
  console.log('%cinit index screen', 'background: #222; color: #bada55')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to next screen"
        onPress={() => router.navigate('another-screen')}
      />
    </View>
  )
}
