import React from "react";
import Video from "./Video";

export default function HomeHeroText() {
  return (
    <div className="font-[font1] text-white pt-5 text-center">
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">L'étincelle</div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">
        qui
        <div className="h-[7vw] rounded-full w-[16vw] -mt-5 overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">la créativité</div>
    </div>
  );
}
