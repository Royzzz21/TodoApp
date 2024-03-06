/** @format */

import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./src/routes";
import { persistor, store } from "./src/redux/store";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "white" }}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <SafeAreaProvider>
            <Routes />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
