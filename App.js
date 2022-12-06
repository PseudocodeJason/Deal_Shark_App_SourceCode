import { Provider } from "react-redux";
import store from "./redux/store";
import DefaultApp from "./defaultApp";

export default function App() {
  return (
    <Provider store={store}>
      <DefaultApp/>
    </Provider>
  );
}