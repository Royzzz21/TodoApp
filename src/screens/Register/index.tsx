import React from "react";
import BaseScreen from "../../components/BaseScreen";
import { Button, HStack, Icon, Input, Pressable, VStack, useToast } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Logo from "../../components/Logo";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import { Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../../redux/Slice/UserSlice/UserSlice";
import { RootState } from "../../redux/store";


const Register = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const navigation = useNavigation();
  const toast = useToast();
  const dispatch = useDispatch();
  

  const RegisteredUser = useSelector((state: RootState) => state?.user.userData);

  const onRegisterhandler = () => {
    if(username.length === 0 || password.length === 0 ) {
        toast.show({description: 'Please fill out all fields'})
    }else {
        const filteredUsername = RegisteredUser.filter((user: { username: string | any[]; }) => user.username.includes(username));
        const data = {id: RegisteredUser.length + 1, username: username, password: password};
        // const addData = userData.concat(data);
        console.log(filteredUsername[0]);
        console.log(data);
        
        if(filteredUsername[0] === undefined){
            dispatch(setUserData(data));
            setUsername('')
            setPassword('');
            toast.show({description: 'Successfully registered! please login!'})
        } else {
            toast.show({description: 'User already Exist'})
        }
        console.log(RegisteredUser.length);
        console.log(RegisteredUser);
    }
  }

  return (
    <BaseScreen>
      <Header title={"Register"} />
      <VStack flex={1} justifyContent={"space-evenly"} alignItems={"center"}>
        {/* <Logo /> */}
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
            value={username}
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
            value={password}
          />
          <Button
            onPress={onRegisterhandler}
            mt={1}
            size="sm"
          >
            Submit
          </Button>
        </VStack>
      </VStack>
    </BaseScreen>
  );
};

export default React.memo(Register);
