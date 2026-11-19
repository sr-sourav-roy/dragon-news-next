import Image from "next/image";
import logo from "@/assets/logo.png";
import { Suspense } from "react";
import CurrentDate from "./CurrentDate";
const Headers = () => {
  return (
    // header
    <div className="text-center py-6 sp">
      <Image
        src={logo}
        width={300}
        height={200}
        alt="logo"
        className="mx-auto"
      />
      <p>Journalism Without Fear or Favour</p>
      <Suspense fallback={<p className="h-5">loading..</p>}>
        <CurrentDate></CurrentDate>
      </Suspense>
    </div>
  );
};

export default Headers;
