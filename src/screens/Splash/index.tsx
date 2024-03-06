import { Spinner, Text, VStack, View } from "native-base";
import React, { useEffect } from "react";
import BaseScreen from "../../components/BaseScreen";
import colors from "../../constant/colors";
import Logo from "../../components/Logo";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Splash = () => {
  const navigation = useNavigation();
  const authDetails = useSelector((state: RootState) => state?.auth.authDetails);

  useEffect(() => {
    console.log(authDetails);
    setTimeout(() => {
        if(authDetails === null) {
            navigation.navigate('Login');
        } else {
            navigation.navigate('Main');
        }
        // navigation.navigate('Login');
    }, 2000)
  }, [navigation, authDetails])
  return (
    <BaseScreen>
      <VStack flex={1} justifyContent={"space-evenly"} alignItems={"center"}>
        <Logo />
        <Spinner
          size="lg"
          color={colors.secondaryColor}
          accessibilityLabel="Loading"
        />
      </VStack>
    </BaseScreen>
  );
};

export default React.memo(Splash);
