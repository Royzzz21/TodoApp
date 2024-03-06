import { HStack, Image, Text, View } from "native-base";
import React from "react";
import Logo from "../../../../components/Logo";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import colors from "../../../../constant/colors";
import { setAuthDetails } from "../../../../redux/Slice/AuthSlice/AuthSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const authDetails = useSelector(
    (state: RootState) => state?.auth.authDetails
  );
  
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const LogoutHandler = () => {
    console.log(authDetails);
    console.log("Logout!");
    dispatch(setAuthDetails(null));
    navigation.navigate('Login');
  };
  return (
    <HStack
      style={{
        backgroundColor: "#fff",
        width: "100%",
        height: 60,
      }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Image
        h={10}
        width={20}
        resizeMode="stretch"
        source={require("../../../../assets/Logo.jpeg")}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 20,
        }}
        onPress={LogoutHandler}
      >
        <AntDesign size={20} name="logout" />
      </TouchableOpacity>
      <Text position={"absolute"} left={5} fontSize={18}>
       Hi,  {authDetails?.username}
      </Text>
    </HStack>
  );
};

export default React.memo(Header);
