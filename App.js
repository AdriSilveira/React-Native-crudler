import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ModuleAddScreen from "./src/components/screens/ModuleAddScreen";
import ModuleListScreen from "./src/components/screens/ModuleListScreen";
import ModuleViewScreen from "./src/components/screens/ModuleViewScreen";
import ModuleModifyScreen from "./src/components/screens/ModuleModifyScreen";
import UserListScreen from "./src/components/screens/UserListScreen";
import HomeScreen from "./src/components/screens/HomeScreen";

const Stack = createNativeStackNavigator();

export const App = () => {
  //Initialisation----------------------------------------
  //State-------------------------------------------------
  //Handlers----------------------------------------------
  //View--------------------------------------------------

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "HomeScreen" }}
        />
        <Stack.Screen
          name="ModuleListScreen"
          component={ModuleListScreen}
          options={{ title: "List module" }}
        />
        <Stack.Screen
          name="ModuleAddScreen"
          component={ModuleAddScreen}
          options={{ title: "Add module" }}
        />
        <Stack.Screen
          name="ModuleViewScreen"
          component={ModuleViewScreen}
          options={{ title: "View module" }}
        />
        <Stack.Screen
          name="ModuleModifyScreen"
          component={ModuleModifyScreen}
          options={{ title: "Modify module" }}
        />
        <Stack.Screen
          name="UserListScreen"
          component={UserListScreen}
          options={{ title: "List user" }}
        />
        {/* <Stack.Screen
          name="UserListScreen"
          component={UserListScreen}
          options={{ title: "List user" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
