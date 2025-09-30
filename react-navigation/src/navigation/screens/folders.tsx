import { View } from 'react-native'
import { Button } from '@react-navigation/elements'

export function FoldersScreen() {
  console.log('%cinit folders screen', 'background: #235789; color: #fff')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button screen="folderId">Folder details</Button>
    </View>
  )
}
