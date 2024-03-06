import { Text } from "native-base";
import React from "react";
import BaseScreen from "../../components/BaseScreen";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Status from "./components/Status";

const Main = () => {
    return(
        <BaseScreen>          
            <Header />
            <Status />
            <TodoList />
        </BaseScreen>
    );
}

export default React.memo(Main);