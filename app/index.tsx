import { StyleSheet, View, TextInput } from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { useState } from "react";

// define shopping list items type
type ShoopingListItemType = {
  id: string;
  name: string;
};

// define the initialList
const initialList: ShoopingListItemType[] = [
  { id: "1", name: "Coffee" },
  { id: "2", name: "Tea" },
  { id: "3", name: "Milk" },
];

export default function App() {
  const [shoppingList, setShoppingList] = useState(initialList);
  const [value, setValue] = useState<string>();

  const handleSubmit = () => {
    if (value) {
      // add new item to the list
      const newShoppingList = [
        {
          id: new Date().toISOString(),
          name: value,
        },
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      setValue("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.textInput}
        onChangeText={setValue}
        placeholder="E.g Coffee"
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      {shoppingList.map((item) => (
        <ShoppingListItem key={item.id} name={item.name} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
    paddingTop: 12,
  },
  textInput: {
    backgroundColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    fontSize: 18,
    borderRadius: 50,
    marginHorizontal: 12,
    marginBottom: 12,
  },
});
