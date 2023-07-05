import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../utils/constants";
import ReactPlayer from "react-player";
import { AiFillLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import millify from "millify";
import VideoCard from "./../components/VideoCard";
import StringArea from "../components/StringArea";
import Loading from "../components/Loading";

const VideoDetail = () => {
  const params = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [relatedContents, setRelatedContents] = useState(null);

  useEffect(() => {
    setVideoDetails(null);
    setRelatedContents(null);
    // for selected video details
    axios
      .get(
        `https://youtube138.p.rapidapi.com/video/details/?id=${params.videoId}`,
        options
      )
      .then((res) => setVideoDetails(res.data));
    // for related contents

    axios
      .get(
        `https://youtube138.p.rapidapi.com/video/related-contents/?id=${params.videoId}`,
        options
      )
      .then((res) => setRelatedContents(res.data.contents));
  }, [params.videoId]);

  // console.log(relatedContents);
  // console.log(videoDetails);

  return (
    <div className="flex items-center w-full">

     <div className="loading w-full items-center">
     {!videoDetails && (<Loading/>)}
     </div>

      {videoDetails && (
        <>
          <div className="VideoDetailPage flex flex-wrap justify-around w-full">
            {/* ana içerik */}
            <div className="main-content px-10 max-w-[800px] flex flex-col gap-2">
              <div className="px-10 bg-gray-800 rounded">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${params.videoId}`}
                  controls
                />
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <h2>{videoDetails.title}</h2>
                {/* kanal hakkındaki bilgiler */}
                <div className="flex justify-between ">
                  <div className="leftSide flex gap-4  items-center">
                    <img
                      className="h-[48px] rounded-full"
                      src={videoDetails.author.avatar[0].url}
                      alt="avatar image"
                    />
                    <div className="stats">
                      <p>{videoDetails.author.title}</p>
                      <p>{videoDetails.author.stats.subscribersText}</p>
                    </div>
                    <button className="text-black rounded py-2 mx-2 hover:bg-gray-300 ">
                      Abone Ol
                    </button>
                  </div>
                  <div className="rightSide flex gap-5">
                    <div className="flex items-center gap-3 bg-gray-800 rounded p-3 cursor-pointer hover:bg-gray-700">
                      <span>
                        <AiFillLike />
                      </span>
                      <span>{millify(Number(videoDetails.stats?.likes))} </span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-800 rounded p-3 cursor-pointer hover:bg-gray-700">
                      <span>
                        <RiShareForwardLine />
                      </span>
                      <span>Paylaş </span>
                    </div>
                  </div>
                  {/* video hakkında kısmı */}
                </div>
                <div className="video-description bg-gray-600 rounded p-3 ">
                  <p className="flex gap-5 mb-3">
                    <span>
                      {millify(Number(videoDetails.stats.views))} kez izlendi.
                    </span>
                    <span className="ps-2">
                      {videoDetails.publishedDate} tarihinde yayınlandı
                    </span>
                  </p>
                  {/* <p className="description">{videoDetails.description}</p> */}
                  <StringArea text={videoDetails.description} max={150} />
                </div>
              </div>
            </div>
            {/* alakalı içerikler */}
            <div className="related-contents max-w-[400px] lg:px-10 md:ps-10 md:w-full ">
              {!relatedContents && (<Loading />)}
              {relatedContents &&
                relatedContents.map(
                  (video) =>
                    video.type == "video" && (
                      <VideoCard key={video.video.videoId} videoInfo={video} />
                    )
                )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoDetail;
