import React from "react";
import { Text } from "react-native";
import BaseScreen from "../../components/BaseScreen";
import { Button, Icon, Input, Pressable, VStack, useToast } from "native-base";
import Logo from "../../components/Logo";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setAuthDetails } from "../../redux/Slice/AuthSlice/AuthSlice";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const toast = useToast();

  const RegisteredUser = useSelector(
    (state: RootState) => state?.user.userData
  );

  const LoginHandler = () => {
    if (username === "" && password === "") {
      toast.show({ description: "Please input username and Password !" });
    } else if (username != "" && password === "") {
      toast.show({ description: "Please input password !" });
    } else if (username === "" && password != "") {
      toast.show({ description: "Please input username !" });
    } else {
      const filteredUsername = RegisteredUser.filter(
        (user: { username: string | any[] }) => user.username.includes(username)
      );
      if(filteredUsername[0] === undefined){
        toast.show({ description: "User is not Exist !" });
      } else if (filteredUsername[0].username === username && filteredUsername[0].password != password )  {
        toast.show({ description: "Incorrect password !" });
      } else if (filteredUsername[0].username === username && filteredUsername[0].password === password) {
        console.log('SuccessFully Login!');
        dispatch(setAuthDetails(filteredUsername[0]));
      }
    }
  };
  return (
    <BaseScreen>
      <VStack flex={1} justifyContent={"space-evenly"} alignItems={"center"}>
        <Logo />
        <VStack width={"70%"}>
          <Input
            w={{
              base: "100%",
              sm: "25%",
            }}
            h={38}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="person" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Name"
            onChangeText={setUsername}
          />
          <Input
            mt={1}
            h={38}
            w={{
              base: "100%",
              md: "25%",
            }}
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder="Password"
            onChangeText={setPassword}
          />
          <Button onPress={LoginHandler} mt={1} size="sm">
            Login
          </Button>
          <Button
            onPress={() => navigation.navigate("Register")}
            mt={1}
            colorScheme="secondary"
            color="blue.100"
            size="sm"
          >
            Register
          </Button>
        </VStack>
      </VStack>
    </BaseScreen>
  );
};

export default React.memo(Login);
