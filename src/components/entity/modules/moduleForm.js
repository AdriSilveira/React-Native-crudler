import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import Icons from "../../UI/Icons.js";
import { ButtonTray, Button } from "../../UI/Button.js";

const defaultModules = {
  ModuleID: null,
  ModuleName: null, //" Mobile Application Development",
  ModuleCode: null, //"CI7952",
  ModuleLevel: null, //5,
  ModuleLeaderName: null, //"Graeme Jones",
  ModuleImageURL: null,
};

const ModuleForm = ({ onSubmit, onCancel }) => {
  //Initialisation----------------------------------------
  defaultModules.ModuleID = Math.floor(100000 + Math.random() * 900000);
  defaultModules.ModuleImageURL =
    "https://images.freeimages.com/images/small-previews/402/rocket-in-the-museum-1450195.jpg";

  //State-------------------------------------------------
  const [module, setModule] = useState(defaultModules);

  //Handlers----------------------------------------------

  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });

  const handleSubmit = () => onSubmit(module);
  //View--------------------------------------------------
  const submitLabel = "Add";
  const submitIcon = "";

  return (
    <View style={styles.formContainer}>
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
          keyboardType="numeric"
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module Leader Name</Text>
        <TextInput
          value={module.ModuleLeaderName}
          onChangeText={(value) => handleChange("ModuleLeaderName", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>ModuleImageURL</Text>
        <TextInput
          value={module.ModuleImageURL}
          onChangeText={(value) => handleChange("ModuleImageURL", value)}
          style={styles.itemTextInput}
        />
      </View>

      <ButtonTray>
        <Button label={submitLabel} icon={submitIcon} onClick={handleSubmit} />
        <Button label="Cancel" Click={onCancel} />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
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

export default ModuleForm;
