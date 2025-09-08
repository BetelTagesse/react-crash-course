import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet /> {/* children (Posts) show here */}
    </>
  );
};

export default RootLayout;
