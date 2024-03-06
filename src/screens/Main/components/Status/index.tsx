import { HStack, Text } from "native-base";
import React from "react";
import colors from "../../../../constant/colors";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const Status = () => {
  const allTask = useSelector((state: RootState) => state?.task.taskData);
  const authDetails = useSelector(
    (state: RootState) => state?.auth.authDetails
  );

  const TaskByUserId = allTask.filter(
    (task) => task?.userid === authDetails?.id
  );

  const CompletedTaskByUserId = allTask.filter(
    (task) => task?.userid === authDetails?.id && task.completed === true
  );

  const IncompleteTaskByUserId = allTask.filter(
    (task) => task?.userid === authDetails?.id && task.completed === false
  );

  return (
    <HStack w={"100%"} justifyContent={"space-between"} p={3} mt={5}>
      <HStack>
        <Text color={colors.blue} fontWeight={"bold"}>Total:</Text>
        <Text pl={2}>{TaskByUserId.length}</Text>
      </HStack>
      <HStack>
        <Text color={colors.secondaryColor} fontWeight={"bold"}>Completed: </Text>
        <Text pl={2}>{CompletedTaskByUserId.length}</Text>
      </HStack>
      <HStack>
        <Text color={colors.red} fontWeight={"bold"}>Incomplete:</Text>
        <Text pl={2}>{IncompleteTaskByUserId.length}</Text>
      </HStack>
    </HStack>
  );
};

export default React.memo(Status);
