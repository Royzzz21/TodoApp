import {
  Button,
  FormControl,
  HStack,
  Input,
  Modal,
  Text,
  VStack,
  View,
} from "native-base";
import React from "react";
import colors from "../../constant/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { addTask } from "../../redux/Slice/TaskSlice/TaskSlice";

const AddModal = () => {
 const authDetails = useSelector((state: RootState) => state?.auth.authDetails);
 const [task, setTask] = React.useState<string>('');
    
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const allTask = useSelector((state: RootState) => state?.task.taskData);
  

  const onAddTask = () => {
    const data = {id: allTask.length + 1, title: task, completed: false, userid: authDetails?.id};
    console.log(data);
    dispatch(addTask(data));
    navigation.goBack();
    // console.log("add Task!");
    
    // console.log(task);
  }

  return (
    <View flex={1} justifyContent={"center"} alignItems={"center"}>
      <VStack
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          backgroundColor: "#fff",
        }}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={colors.white}
        width={"80%"}
        borderRadius={5}
        p={3}
      >
        <Text py={1}>Add Task</Text>
        <Input height={30} onChangeText={setTask}/>
        <HStack justifyContent={"flex-end"} w={"100%"} p={1} mt={1}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons size={30} name="cancel"  color={colors.red}/>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 5}} onPress={onAddTask}>
                <MaterialIcons size={30} name="check-circle"  color={colors.secondaryColor}/>
            </TouchableOpacity>
        </HStack>
      </VStack>
    </View>
  );
};

export default React.memo(AddModal);
