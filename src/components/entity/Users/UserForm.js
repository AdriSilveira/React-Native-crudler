import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import Icons from "../../UI/Icons.js";
import Form from "../../UI/Form.js";

const defaultUsers = {
  UserID: null,
  UserFirstname: null,
  UserLastname: null,
  UserEmail: null,
  UserImageURL: null,
  UserType: null,
  UserYear: null,
};

const UserForm = ({ originalUser, onSubmit, onCancel }) => {
  //Initialisation----------------------------------------
  defaultUsers.UserID = Math.floor(100000 + Math.random() * 900000);
  //State--------------------------------------------------------
  const [user, setUsers] = useState(originalUser || defaultUsers);

  const handleChange = (field, value) => setUsers({ ...user, [field]: value });

  const handleSubmit = () => onSubmit(user);
  //View--------------------------------------------------
  const submitLabel = originalUser ? "Modify" : "Add";
  const submitIcon = originalUser ? <Icons.Edit /> : <Icons.Add />;

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      <Form.InputText
        label="UserFirstname"
        value={user.UserFirstname}
        onChange={(value) => handleChange("UserFirstname", value)}
      />

      <Form.InputText
        label="UserLastname"
        value={user.UserLastname}
        onChange={(value) => handleChange("UserLastname", value)}
      />

      <Form.InputText
        label="UserEmail"
        value={user.UserEmail}
        onChange={(value) => handleChange("UserEmail", value)}
      />

      <Form.InputText
        label="UserImageURL"
        value={user.UserImageURL}
        onChange={(value) => handleChange("UserImageURL", value)}
      />

      <Form.InputText
        label="UserType"
        value={user.UserType}
        onChange={(value) => handleChange("UserType", value)}
      />
      <Form.InputText
        label="UserYear"
        value={user.UserYear}
        onChange={(value) => handleChange("UserYear", value)}
      />
    </Form>
  );
};

const styles = StyleSheet.create({});

export default UserForm;
