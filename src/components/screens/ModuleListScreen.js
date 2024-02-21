import { StyleSheet, LogBox, Text } from "react-native";
import Screen from "../layout/Screen.js";
import initialModules from "../../data/modules.js";
import { useState } from "react";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";
import ModuleList from "../entity/modules/ModuleList.js";

const ModuleListScreen = ({ navigation }) => {
  // Initialisation----------------------------------------
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  // State-------------------------------------------------
  // Take modules and initialize using the useState
  const [modules, setModules] = useState(initialModules);

  // Handlers----------------------------------------------
  // Function to navigate to the respective module
  // Filter the modules and delete the one that was clicked on.
  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  const handleAdd = (module) => setModules([...modules, module]);

  //new array to update our state
  const handleModify = (updateModule) =>
    setModules(
      modules.map((module) =>
        module.ModuleID === updateModule.ModuleID ? updateModule : module
      )
    );

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };
  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const onModify = (module) => {
    handleModify(module);
    navigation.navigate("ModuleListScreen");
  };

  const gotoViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });

  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

  // View--------------------------------------------------
  return (
    <Screen>
      {/* <Text style={styles.container}>Modules</Text> */}
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 25,
    textAlign: "center",
    margin: 6,
  },
});

export default ModuleListScreen;
