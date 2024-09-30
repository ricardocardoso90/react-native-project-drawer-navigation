import { DrawerToggleButton } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native";

export default function Notification() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.username}>Notification</Text>

        <DrawerToggleButton />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 45,
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