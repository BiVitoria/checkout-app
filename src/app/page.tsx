import { Beef, HandPlatter } from "lucide-react";

import { getAllRestaurants } from "@/data/get-all-restaurant";

const HomePage = async () => {
  const restaurants = await getAllRestaurants();
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-orange-600">
      {/* <Beef width={150} height={150} color="white" /> */}
      <div className="flex flex-col items-center justify-center pb-6 text-5xl font-bold">
        Quick
        <HandPlatter width={100} height={100} color="white" />
        Eat´s
      </div>
    </div>
  );
};

export default HomePage;
