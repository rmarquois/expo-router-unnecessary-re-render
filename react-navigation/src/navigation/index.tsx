import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IndexScreen } from './screens/Index';
import { AnotherScreen } from './screens/AnotherScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    IndexScreen: {
      screen: IndexScreen,
      options: { title: 'React Navigation' }
    },
    AnotherScreen: {
      screen: AnotherScreen,
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
