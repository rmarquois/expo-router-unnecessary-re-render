import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screens/login';
import FoldersStack from './folders';

const RootStack = createNativeStackNavigator({
  screens: {
    login: {
      screen: LoginScreen,
    },
    folders: {
      screen: FoldersStack,
    },
  },
  screenOptions: {
    headerShown: false,
    presentation: 'transparentModal'
  }
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
