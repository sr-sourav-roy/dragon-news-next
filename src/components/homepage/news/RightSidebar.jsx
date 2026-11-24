"use client";
import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  const handleGoogleSingin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    // console.log(data, "data");
  };

  const handleGitHubSingin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data, "data");
  };
  return (
    <div>
      <h1 className="text-lg font-bold">Login With</h1>
      <div className="flex flex-col gap-3 mt-3">
        <button
          className="btn border-blue-500 text-blue-500"
          onClick={handleGoogleSingin}
        >
          <FaGoogle /> Login with Google
        </button>
        <button className="btn" onClick={handleGitHubSingin}>
          <FaGithub />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
