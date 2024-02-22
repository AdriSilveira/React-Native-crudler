import { StyleSheet, Text, View } from "react-native";
import initialUsers from "../../data/users";
import Screen from "../layout/Screen";
import UserList from "../entity/Users/UserList";
import { useState } from "react";
import { Button, ButtonTray } from "../UI/Button";
import Icons from "../UI/Icons";

const UserListScreen = ({ navigation }) => {
  //Initialisation----------------------------------------
  //State-------------------------------------------------
  const [users, setUsers] = useState(initialUsers);
  //Handlers----------------------------------------------
  const handleDelete = (user) =>
    setUsers(users.filter((item) => item.UserID !== user.UserID));

  //View--------------------------------------------------
  const handleAdd = (user) => setUsers([...users, user]);
  const handleModify = (updateUser) =>
    setUsers(
      users.map((user) =>
        user.UserID === updateUser.UserID ? updateUser : user
      )
    );

  const onDelete = (user) => {
    handleDelete(user);
    navigation.goBack();
  };
  const onAdd = (user) => {
    handleAdd(user);
    navigation.goBack();
  };

  const onModify = (user) => {
    handleModify(user);
    navigation.navigate("UserListScreen");
  };

  const gotoViewScreen = (user) =>
    navigation.navigate("UserViewScreen", { user, onDelete, onModify });

  const gotoAddScreen = () => navigation.navigate("UserAddScreen", { onAdd });

  // View--------------------------------------------------
  return (
    <Screen>
      <UserList users={users} onSelect={gotoViewScreen} />
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserListScreen;
