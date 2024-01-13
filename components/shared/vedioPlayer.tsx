"use client";
import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
}
const VedioPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  
  return (
    <ReactPlayer
      url={url}
      height={'20rem'}
      width={"100%"}
      loop={true}
      playing={true}
    />
  );
};

export default VedioPlayer;
