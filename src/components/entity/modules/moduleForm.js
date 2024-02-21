import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import Icons from "../../UI/Icons.js";
import Form from "../../UI/Form.js";

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

  const levels = [
    { value: 3, label: "3 (Foundation)" },
    { value: 4, label: "4 (First year)" },
    { value: 5, label: "5 (Second year)" },
    { value: 6, label: "6 (Final year)" },
    { value: 7, label: "7 (Masters)" },
  ];

  //State-------------------------------------------------
  const [module, setModule] = useState(defaultModules);

  //Handlers----------------------------------------------
  console.log("here");
  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });

  const handleSubmit = () => onSubmit(module);
  //View--------------------------------------------------
  const submitLabel = "Add";
  const submitIcon = "";

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      <Form.InputText
        label="Module Code"
        value={module.ModuleCode}
        onChange={(value) => handleChange("ModuleCode", value)}
      />

      <Form.InputText
        label="Modules Name"
        value={module.ModuleName}
        onChange={(value) => handleChange("ModuleName", value)}
      />

      <Form.InputSelect
        label="Modules Level"
        prompt="Select module level..."
        options={levels}
        value={module.ModuleLevel}
        onChange={(value) => handleChange("ModuleLevel", value)}
      />

      <Form.InputText
        label="Module Leader Name"
        value={module.ModuleLeaderName}
        onChange={(value) => handleChange("ModuleLeaderName", value)}
      />

      <Form.InputText
        label="ModuleImageURL"
        value={module.ModuleImageURL}
        onChange={(value) => handleChange("ModuleImageURL", value)}
      />
    </Form>
  );
};

const styles = StyleSheet.create({});

export default ModuleForm;
