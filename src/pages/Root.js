import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";
import classes from "./Root.module.css";
const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.mainContent}>
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
