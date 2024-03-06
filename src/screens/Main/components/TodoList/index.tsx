import { Ionicons } from "@expo/vector-icons";
import {
  Box,
  Center,
  CheckIcon,
  HStack,
  Text,
  VStack,
  Select,
  View,
} from "native-base";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../../../constant/colors";
import { Picker } from "@react-native-picker/picker";
import AddModal from "../../../../components/AddModal";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import TaskItem from "../TaskItem";

const TodoList = () => {
  const [service, setService] = React.useState("");
  const [sort, setSort] = React.useState("all");
  const navigation = useNavigation();

  const allTask = useSelector((state: RootState) => state?.task.taskData);
  const authDetails = useSelector(
    (state: RootState) => state?.auth.authDetails
  );
  const TaskByUserId = allTask.filter(
    (task) => task?.userid === authDetails?.id
  );
 
  const sortByCompleted = TaskByUserId.sort(({ completed: stateA = false }, { completed: stateB = false }) =>
  Number(stateB) - Number(stateA)
);

  console.log("test!");
  console.log(TaskByUserId);
  console.log('test sort!');
  console.log(sortByCompleted)
  console.log(allTask);
 let sortedData; 
  switch (sort) {
    case 'all':
        sortedData = TaskByUserId.sort(({ id: stateA }, { id: stateB }) =>
        Number(stateB) - Number(stateA)
      ); ;
        break;
    case 'completed':
        sortedData = sortByCompleted;
       break;
    case 'name' : 
       sortedData = TaskByUserId.sort((a, b) => a.title.localeCompare(b.title))
    default:
        break;
  }
  
  console.log("completedData")
  console.log(sortedData);
  return (
    <VStack flex={1} backgroundColor={"#F4F6F6"}>
      <HStack
        p={3}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
      >
        <Text fontSize={20}>Todo List</Text>
        <HStack alignItems={"center"}>
          <Picker
            selectedValue={sort}
            style={{ height: 20, width: 100 }}
            onValueChange={(itemValue, itemIndex) => setSort(itemValue)}
          >
            <Picker.Item label="all" value="all" />
            <Picker.Item label="name" value="name" />
            <Picker.Item label="completed" value="completed" />
          </Picker>
          <TouchableOpacity
            style={{marginLeft: 20}}
            onPress={() =>
              navigation.navigate("TransparentModal", {
                content: <AddModal />,
                fullScreen: true,
              })
            }
          >
            <Ionicons name="add" size={25} />
          </TouchableOpacity>
        </HStack>
      </HStack>
      {TaskByUserId.length === 0 ? (
        <View flex={1} justifyContent={"center"} alignItems={"center"}>
          <Text>No data Found!</Text>
        </View>
      ) :  <FlatList
      scrollEnabled
      style={{ padding: 10 }}
      data={sortedData}
      renderItem={({ item }) => (
        <TaskItem
          title={item?.title}
          completed={item?.completed}
          id={item?.id}
        />
      )}
    />}
    </VStack>
  );
};

export default React.memo(TodoList);
