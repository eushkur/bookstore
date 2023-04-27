import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { GlobalStyles } from "ui/GlobalStyles";
import { PersistGate } from "redux-persist/lib/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <PersistGate loading={null} persistor={persistor}>
    <GlobalStyles />,
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    ,
  </PersistGate>,
);
