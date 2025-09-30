import { View, Button } from 'react-native'
import { router } from 'expo-router'

export function FoldersScreen() {
  console.log('%cinit folders screen', 'background: #235789; color: #fff')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Folder details"
        onPress={() => router.navigate('folders/2')}
      />
    </View>
  )
}
