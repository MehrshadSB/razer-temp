import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { Provider } from "react-redux";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="body">
          <Main />
          <NextScript />
      </body>
    </Html>
  );
}
