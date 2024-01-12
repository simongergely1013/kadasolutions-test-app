"use client";
import { Provider } from "react-redux";
import { store } from "./index";

export function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
}
