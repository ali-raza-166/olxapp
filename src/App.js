import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import PostAdFormPage from "./pages/PostAd";
import MyAds from "./pages/MyAds";
import Help from "./pages/Help";
import Settings from "./pages/Settings";
import FilteredProducts from "./pages/FilteredProducts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/post", element: <PostAdFormPage /> },
      { path: "/myAds", element: <MyAds /> },
      { path: "/help", element: <Help /> },
      { path: "/settings", element: <Settings /> },
      { path: "/items", element: <FilteredProducts /> },
      // { path: "/products/:id", element: <ProductDetail /> },
      // { path: "/*", element: <ErrorPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
