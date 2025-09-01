import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

export default function Agence() {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 28%",
        end: "top -70%",
        pin: true,
        onUpdate: function (el) {
          // console.log(Math.floor(el.progress * imageArray.length))
          let imageIndex;
          if (el.progress < 1) {
            imageIndex = Math.floor(el.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
        //   console.log(imageRef.current.src);
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });
  return (
    <div>
      <div className="section-1">
        <div
          ref={imageDivRef}
          className="h-90 w-70 absolute top-80 left-98 rounded-3xl overflow-hidden"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="section-2 h-screen">
        <div className="font-[font2] relative">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] uppercase leading-[18vw] text-center">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-6xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit
              notre créativité. On reste humbles et on dit non aux gros egos,
              même le vôtre. Une marque est vivante. Elle a des valeurs, une
              personnalité, une histoire. Si on oublie ça, on peut faire de bons
              chiffres à court terme, mais on la tue à long terme. C’est pour ça
              qu’on s’engage à donner de la perspective, pour bâtir des marques
              influentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
