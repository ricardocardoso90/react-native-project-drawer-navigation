import { StyleSheet, Text, View } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { DrawerSceneWrapper } from "../components/drawer-scene-wrapper";

export default function Notification() {
  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <View style={styles.header}>

          <Text style={styles.username}>Notification</Text>

          <DrawerToggleButton />
        </View>
      </View>
    </DrawerSceneWrapper>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 65,
    backgroundColor: '#FFF'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  username: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
  }
});