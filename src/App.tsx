import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import Complete from "./pages/Complete";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import Payment from "./pages/Payment";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Layout from "./components/Common/Layout";
import Category from "./pages/Category";
import { Global } from "@emotion/react";
import { globalStyle } from "./components/Common/Common.styles";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "detail", element: <Detail /> },
      { path: "cart", element: <Cart /> },
      { path: "payment", element: <Payment /> },
      { path: "complete", element: <Complete /> },
      { path: "mypage", element: <MyPage /> },
      { path: "category", element: <Category /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
