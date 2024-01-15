"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
}
const VedioPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div>
      {hasWindow && (
        <ReactPlayer
          url={url}
          height={"20rem"}
          width={"100%"}
          loop={true}
          playing={true}
          controls={false}
        />
      )}
    </div>
  );
};

export default VedioPlayer;
