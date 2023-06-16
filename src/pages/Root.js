import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";
const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h3>
          I'll be rendered on all children components except the when
          errorElement is triggered
        </h3>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
