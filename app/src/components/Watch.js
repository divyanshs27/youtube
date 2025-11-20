"use client";

import { useSearchParams } from "next/navigation";
import CommentsContainer from "./CommentsContainer";
const Watch = () => {
  const params = useSearchParams();
  return (
    <div className="flex flex-col">
      <div>
        <iframe
          width="1200"
          height="500"
          src={"https://www.youtube.com/embed/" + params.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default Watch;
