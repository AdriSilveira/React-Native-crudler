import { Pressable, StyleSheet, Text, View } from "react-native";

const UserItem = ({ user, onSelect }) => {
  //Initialisation----------------------------------------
  //State-------------------------------------------------
  //Handlers----------------------------------------------
  //View--------------------------------------------------

  return (
    <Pressable onPress={() => onSelect(user)}>
      <View style={styles.item}>
        <Text style={styles.text}>
          {user.UserFirstname}
          {user.UserLastname}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    borderWidth: 1,
    padding: 3,
  },
  text: {
    color: "black",
  },
});

export default UserItem;
