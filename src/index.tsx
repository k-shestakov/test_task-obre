import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Root } from "./Root";
import { store } from "./store/store";

const element = document.getElementById("root") as HTMLElement;
const root = createRoot(element);

root.render(
  <Provider store={store}>
    <Root />
  </Provider>
);
