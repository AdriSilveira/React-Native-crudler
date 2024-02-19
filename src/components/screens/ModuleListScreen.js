import { StyleSheet, LogBox } from "react-native";
import Screen from "../layout/Screen.js";
import initialModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleList.js";
import { useState } from "react";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";

const ModuleListScreen = ({ navigation }) => {
  //Initialisation----------------------------------------
  LogBox.ignoreLogs([""]);

  //State-------------------------------------------------
  //take modules and initialize using the useState
  const [modules, setModules] = useState(initialModules);

  //Handlers----------------------------------------------
  //function to navigate to the respective module
  //filter the modules and delete the one that was click one.
  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  const handleAdd = (module) => setModules([...modules, module]);

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };
  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const gotoViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete });

  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

  //View--------------------------------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onclick={gotoAddScreen} />
      </ButtonTray>

      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );

  const styles = StyleSheet.create({
    container: {},
  });
};
export default ModuleListScreen;
