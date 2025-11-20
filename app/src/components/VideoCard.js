import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;
  console.log("video card", info);
  const { snippet, statistics } = info;
  if (!snippet) return null;

  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-80 rounded-lg shadow-lg">
      <img
        alt="thumbnail"
        src={thumbnails.medium.url}
        className="w-full rounded-lg"
      />
      <ul className="py-2">
        <li className="font-bold">{title}</li>
        <li className="text-sm text-gray-600">{channelTitle}</li>
        <li className="text-sm text-gray-600">{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};
export const AdVideoCard = ({info}) => {
  return <div className="p-1 m-1 border border-red-400">
    <VideoCard info={info}/>
    <div>Ad</div>
  </div>;
}

export default VideoCard;
