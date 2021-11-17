import { SessionProvider } from "next-auth/react";
import "../styles/global.css";
import { Provider as ReduxProvider } from "react-redux";
import store from "../src/store/store";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </SessionProvider>
  );
}

export default MyApp;
