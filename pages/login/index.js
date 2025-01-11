import Login from "@/components/Template/Login";

function index({ cookies }) {
  return <Login cookies={cookies}/>;
}

export const getServerSideProps = (context) => {
  const { cookies } = context.req;
  const props = {
    cookies: {},
  };

  if (cookies?.accessToken || cookies?.refreshToken) {
    props.cookies.accessToken = cookies.accessToken;
    props.cookies.refreshToken = cookies.refreshToken;
  }

  return {
    props,
  };
};

export default index;
