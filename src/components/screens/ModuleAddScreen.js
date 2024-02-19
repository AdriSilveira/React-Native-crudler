import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Screen from "../layout/Screen";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";

const defaultModules = {
  ModuleID: null,
  ModuleName: null, //" Mobile Application Development",
  ModuleCode: null, //"CI7952",
  ModuleLevel: null, //5,
  ModuleLeaderName: null, //"Graeme Jones",
  ModuleImageURL: null,
};
export const ModuleAddScreen = ({ navigation, route }) => {
  //Initialisation----------------------------------------
  const { onAdd } = route.params;
  defaultModules.ModuleID = Math.floor(100000 + Math.random() * 900000);
  defaultModules.ModuleImageURL =
    "https://images.freeimages.com/images/small-previews/402/rocket-in-the-museum-1450195.jpg";

  //State-------------------------------------------------
  const [module, setModule] = useState(defaultModules);

  //Handlers----------------------------------------------
  const handleAdd = () => onAdd(defaultModules);
  const handleCancel = navigation.goBack;

  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });

  //View--------------------------------------------------

  return (
    <Screen>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Modules code</Text>
        <TextInput
          value={module.ModuleCode}
          onChangeText={(value) => handleChange("ModuleCode", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Modules Name</Text>
        <TextInput
          value={module.ModuleName}
          onChangeText={(value) => handleChange("ModuleName", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Modules Level</Text>
        <TextInput
          value={module.ModuleLevel}
          onChangeText={(value) => handleChange("ModuleLevel", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>ModuleLeaderName</Text>
        <TextInput
          value={module.ModuleLeaderName}
          onChange={(value) => handleChange("ModuleLeaderName", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>ModuleImageURL</Text>
        <TextInput value={module.ModuleImageURL} style={styles.itemTextInput} />
      </View>
      <Screen>
        <ButtonTray>
          <Button label="Add" icon={<Icons.Add />} onclick={handleAdd} />
          <Button label="Cancel" icon={<Icons.Add />} onclick={handleCancel} />
        </ButtonTray>
      </Screen>
    </Screen>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    color: "grey",
    fontSize: 16,
    marginBotton: 5,
    gap: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    gap: 7,
    borderColor: "lightgray",
  },
});

export default ModuleAddScreen;
