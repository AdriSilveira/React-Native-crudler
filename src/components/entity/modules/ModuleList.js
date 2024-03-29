import { ScrollView, StyleSheet } from "react-native";
import ModuleItem from "./ModuleItem";

const ModuleList = ({ modules, onSelect }) => {
  //Initialisation----------------------------------------
  //State-------------------------------------------------
  //Handlers----------------------------------------------
  //View--------------------------------------------------

  return (
    <ScrollView style={styles.container}>
      {modules.map((module) => {
        return (
          <ModuleItem
            key={module.ModuleCode}
            module={module}
            onSelect={onSelect}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    //margin: 3,
    backgroundColor: "#F5FCFF",
  },
});
export default ModuleList;
