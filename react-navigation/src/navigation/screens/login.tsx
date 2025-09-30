import { View } from 'react-native'
import { Button } from '@react-navigation/elements'

export function LoginScreen() {
  console.log('%cinit login screen', 'background: #C1292E; color: #fff')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button screen="folders">Login</Button>
    </View>
  )
}
