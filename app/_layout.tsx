import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Shopping list" }} />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
        }}
      />
      <Tabs.Screen name="idea" options={{ title: "Idea" }} />
    </Tabs>
  );
}
