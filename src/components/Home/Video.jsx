import React from "react";

export default function Video() {
  return (
    <div className="h-full w-full">
      <video
        autoPlay
        loop
        muted
        src="../../../public/video/hero-video.mp4"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
