import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {FoldersScreen} from "./screens/folders";
import FolderIdStack from "./folder-id";

export default createNativeStackNavigator({
    screens: {
        index: {
            screen: FoldersScreen,
            options: {
                headerShown: true
            }
        },
        folderId: {
            screen: FolderIdStack,
        },
    },
    screenOptions: {
        headerShown: false
    }
});
