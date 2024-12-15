import "@/styles/globals.css";
import "@/styles/fonts.css";
import GlobalProvider from "@/Context/GlobalProvider";

export default function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
