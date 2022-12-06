import { Provider } from "react-redux";
import store from "./redux/store";
import DefaultApp from "./defaultApp";
//test comment hello world
export default function App() {
  return (
    <Provider store={store}>
      <DefaultApp/>
    </Provider>
  );
}