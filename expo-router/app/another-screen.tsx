import { memo } from 'react'
import { View, Text } from 'react-native'

export default memo(function AnotherScreen() {
  console.log('%cinit another screen', 'background: #222; color: #bada55')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Second Screen</Text>
    </View>
  )
})
