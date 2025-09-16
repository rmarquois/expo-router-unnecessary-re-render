import { View, Text } from 'react-native'

export function AnotherScreen() {
  console.log('%cinit another screen', 'background: #000; color: #fff')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Second Screen</Text>
    </View>
  )
}
