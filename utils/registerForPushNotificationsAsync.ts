import { Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

// check if you can send notifications
export async function registerForPushNotificationsAsync() {
  // needed for Android modern versions you need to setup a channel
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.DEFAULT,
      vibrationPattern: [0, 250, 250, 250],
      showBadge: false,
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    if (existingStatus !== "granted") {
      // this line creates the notification and pop-up it to the user
      const { status } = await Notifications.requestPermissionsAsync();
      return status;
    } else {
      return existingStatus;
    }
  } else {
    return null;
  }
}
