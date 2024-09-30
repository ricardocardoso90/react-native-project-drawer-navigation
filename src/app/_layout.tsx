import { Drawer } from 'expo-router/drawer';
import { Feather } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: 'transparent',
          drawerInactiveBackgroundColor: 'transparent',
          drawerInactiveTintColor: '#727D9B',
          drawerActiveTintColor: '#FFF',
          // drawerHideStatusBarOnOpen: true,
          overlayColor: 'transparent',
          drawerStyle: {
            backgroundColor: '#1D1F25',
            // paddingTop: 32,
            width: '50%',
          },
          drawerLabelStyle: {
            marginLeft: -24,
          },
          sceneContainerStyle: {
            backgroundColor: '#1D1F25',
          }
        }}
      >
        <Drawer.Screen name='index'
          options={{
            drawerLabel: 'Início',
            drawerIcon: ({ color }) => <Feather name='home' size={20} color={color} />
          }}
        />
        <Drawer.Screen name='notification'
          options={{
            drawerLabel: 'Notificações',
            drawerIcon: ({ color }) => <Feather name='bell' size={20} color={color} />
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
};