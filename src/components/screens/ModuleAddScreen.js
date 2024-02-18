import { StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";

const defaultModules = {
  ModuleID: Math.floor(100000 + Math.random() * 900000),
  ModuleName: " Mobile Application Development",
  ModuleCode: "CI7952",
  ModuleLevel: 5,
  ModuleLeaderName: "Graeme Jones",
  ModuleImageURL:
    "https://images.freeimages.com/images/small-previews/402/rocket-in-the-museum-1450195.jpg",
};
export const ModuleAddScreen = ({ navigation, route }) => {
  //Initialisation----------------------------------------
  const { onAdd } = route.params;
  //State-------------------------------------------------
  //Handlers----------------------------------------------
  const handleAdd = () => onAdd(defaultModules);
  //View--------------------------------------------------

  return (
    <Screen>
      <Text>Add</Text>
      <Screen>
        <ButtonTray>
          <Button label="Add" icon={<Icons.Add />} onclick={handleAdd} />
          <Button label="Cancel" icon={<Icons.Add />} onclick={handleCancel} />
        </ButtonTray>
      </Screen>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
