import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerShown: false,
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