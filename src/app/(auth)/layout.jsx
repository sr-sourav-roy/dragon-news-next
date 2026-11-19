import Navbers from "@/components/shared/Navbers";
import { montserrat } from "../layout";

const AuthLayout = ({ children }) => {
  return (
    <div className={`${montserrat.className}`}>
      <Navbers></Navbers>
      {children}
    </div>
  );
};

export default AuthLayout;
