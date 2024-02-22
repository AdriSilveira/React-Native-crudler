import { ScrollView, StyleSheet } from "react-native";
import UserItem from "./UserItem";

const UserList = ({ users, onSelect }) => {
  //Initialisation----------------------------------------
  //State-------------------------------------------------
  //Handlers----------------------------------------------
  //View--------------------------------------------------

  return (
    <ScrollView style={styles.container}>
      {users.map((user) => {
        return <UserItem key={user.UserID} user={user} onSelect={onSelect} />;
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
export default UserList;
