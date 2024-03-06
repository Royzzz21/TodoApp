import { Checkbox, HStack, Text } from "native-base";
import React from "react";
import colors from "../../../../constant/colors";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import EditModal from "../../../../components/EditModal";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../redux/store";
import { setTaskData } from "../../../../redux/Slice/TaskSlice/TaskSlice";

type props = {
  title: string;
  completed: boolean;
  id: number;
};
const TaskItem: React.FC<props> = ({ title, completed, id }) => {
  const dispatch = useDispatch();
  const allTask = useSelector((state: RootState) => state?.task.taskData);
  const deletedTaskArr = allTask.filter((task) => task?.id != id);
  const  taskData = allTask.filter((task) => task?.id === id);

  const navigation = useNavigation();

  const deleteTask = () => {
    console.log("delete Task!");
    dispatch(setTaskData(deletedTaskArr));
  };

  const updatedTaskStatus = () => {
    const updatedTask = allTask.map((obj) => {
        if (obj.id === id) {
            return {...obj, completed: !taskData[0].completed};
        }

        return obj;
    });
    dispatch(setTaskData(updatedTask));
  }
  return (
    <HStack
      backgroundColor={colors.white}
      width={"100%"}
      mt={2}
      p={3}
      justifyContent={"space-between"}
    >
      <HStack>
        <TouchableOpacity onPress={updatedTaskStatus}>
            <Fontisto
            name={completed ? "checkbox-active" : "checkbox-passive"}
            size={20}
            color={colors.secondaryColor}
            />
        </TouchableOpacity>
        <Text ml={5}>{title}</Text>
      </HStack>
      <HStack alignItems={"center"}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("TransparentModal", {
              content: <EditModal id={id} />,
              fullScreen: true,
            })
          }
        >
          <AntDesign name="edit" size={20} color={colors.blue} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTask}>
          <AntDesign
            name="closecircle"
            size={15}
            color={colors.red}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
      </HStack>
    </HStack>
  );
};

export default React.memo(TaskItem);
