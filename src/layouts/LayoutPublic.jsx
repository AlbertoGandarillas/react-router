import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div className="container">
      <Outlet/>
      <footer>My footer</footer>
    </div>
  );
};
export default LayoutPublic;
