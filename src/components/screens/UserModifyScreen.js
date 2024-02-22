import { StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen.js";
import UserForm from "../entity/modules/ModuleForm.js";

const UserModifyScreen = ({ navigation, route }) => {
  //Initialisation----------------------------------------
  const { user, onModify } = route.params;
  //State-------------------------------------------------
  //Handlers----------------------------------------------
  const handleCancel = navigation.goBack;

  //View--------------------------------------------------

  return (
    <Screen>
      <UserForm
        originalModule={user}
        onSubmit={onModify}
        onCancel={handleCancel}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserModifyScreen;
