import Header from "./Header";
import Footer from "./Footer";

function LoginLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default LoginLayout;
