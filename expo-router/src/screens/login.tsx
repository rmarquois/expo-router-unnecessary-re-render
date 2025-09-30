import {View, Text, Button} from 'react-native'
import {router} from "expo-router";

export function LoginScreen() {
  console.log('%cinit login screen', 'background: #C1292E; color: #fff')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title="Login"
            onPress={() => router.navigate('folders')}
        />
    </View>
  )
}
