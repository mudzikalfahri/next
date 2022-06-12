import CustomButton from "@components/button";
import type { NextPage } from "next";

const Home: NextPage = () => (
  <div className="text-xl text-blue-500 font-bold">
    Hello World <CustomButton />
  </div>
);

export default Home;
