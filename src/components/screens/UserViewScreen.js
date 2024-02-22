import { StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";
import UserView from "../entity/Users/UserView";

const UserViewScreen = ({ navigation, route }) => {
  //Initialisation----------------------------------------
  const { user, onDelete, onModify } = route.params;
  //State-------------------------------------------------
  //Handlers----------------------------------------------
  const gotoModifyScreen = () =>
    navigation.navigate("UserModifyScreen", { user, onModify });
  //View--------------------------------------------------

  return (
    <Screen>
      <UserView user={user} onDelete={onDelete} onModify={gotoModifyScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserViewScreen;
