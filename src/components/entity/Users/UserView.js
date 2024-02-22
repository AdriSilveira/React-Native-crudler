import { Alert, StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import { Button, ButtonTray } from "../../UI/Button";
import Icons from "../../UI/Icons";

const UserView = ({ user, onDelete, onModify }) => {
  //Initialisation----------------------------------------
  //State-------------------------------------------------
  //Handlers----------------------------------------------
  const handleDelete = () => onDelete(user);

  const requestDelete = () =>
    Alert.alert(
      "Delete warning",
      `Are you sure that you want to delete module ${user.UserFirstName} ${user.UserLastName}`,
      [{ text: "Cancel" }, { text: "Delete", onPress: handleDelete }]
    );
  //View--------------------------------------------------

  return (
    <View style={styles.container}>
      <FullWidthImage
        source={{ uri: user.UserImageURL }}
        style={styles.image}
      />
      <View style={styles.infoTray}>
        <Text style={styles.boldText}>
          {user.UserFirstname} {user.UserLastname}
        </Text>
      </View>
      <ButtonTray>
        <Button icon={<Icons.Edit />} label="Modify" onClick={onModify} />
        <Button
          icon={<Icons.Delete />}
          label="Delete"
          onClick={requestDelete}
        />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  image: {
    borderRadius: 3,
    shadowColor: "grey",
    shadowOpacity: 0.6,
    //elevation: 5,
  },
  infoTray: {
    gap: 5,
  },
  text: {
    fontSize: 16,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
    gap: 5,
  },
  dimText: {
    color: "grey",
  },
});
export default UserView;
