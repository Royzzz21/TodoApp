import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./route";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Splash from "../screens/Splash";
import Main from "../screens/Main";
import TransparentModal from "../screens/TransparentModal";
import { LogBox } from "react-native";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

console.warn = () => {
  return "";
};
console.error = () => {
  return "";
};
LogBox.ignoreAllLogs();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="TransparentModal"
          component={TransparentModal}
          options={{
            presentation: "transparentModal",
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            animation: "fade",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
