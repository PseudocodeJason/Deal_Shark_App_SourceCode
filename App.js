import { Provider } from "react-redux";
import store from "./redux/store";
import DealsApp from "./dealsApp"
export default function App() {
  return (
    <Provider store={store}>
      <DealsApp/>
    </Provider>
  );
}