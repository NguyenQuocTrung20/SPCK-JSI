import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import ResetPassword from "./pages/Auth/ResetPassword";
import FallbackSpinner from "./utils/FallbackSpinner";
import Layout from "./layout/Layout";
import ChatRoom from "./pages/chat/ChatRoom";
import AuthContext from "./components/auth-context/AuthContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<AuthContext />} />
      <Route path="/login" element={<SignIn />} />,
      <Route path="/signup" element={<SignUp />} />,
      <Route path="/forgot" element={<ResetPassword />} />,
      <Route path="*" element={<PageNotFound />} />
      <Route path="/chat" element={<ChatRoom />} />
    </>
  )
);

const App = () => {
  return (
    <>
      <Layout>
        <RouterProvider router={router} fallbackElement={<FallbackSpinner />} />
      </Layout>
    </>
  );
};

export default App;
