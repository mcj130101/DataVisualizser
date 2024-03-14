import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


const RootElement = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootElement;
