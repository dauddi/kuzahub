import "../styles/global.css";
import { Provider as ReduxProvider } from "react-redux";
import store from "../src/store/store";
import { Provider } from "next-auth/provider";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </Provider>
  );
}

export default MyApp;
