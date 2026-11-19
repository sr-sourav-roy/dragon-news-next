import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div>
      <h1 className="text-lg font-bold">Login With</h1>
      <div className="flex flex-col gap-3 mt-3">
        <button className="btn border-blue-500 text-blue-500">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn">
          <FaGithub />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
