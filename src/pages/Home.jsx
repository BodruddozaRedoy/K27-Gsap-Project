import React from "react";
import Video from "../components/Home/Video";
import HomeHeroText from "../components/Home/HomeHeroText";
import HomeBottomText from "../components/Home/HomeBottomText";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col overflow-hidden justify-between">
        <HomeHeroText/>
        <HomeBottomText/>
      </div>
    </div>
  );
}
