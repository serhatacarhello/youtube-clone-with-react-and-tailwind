import { useContext } from "react";
import SideNav from "../components/SideNav";
import { YoutubeContext } from "../context/youtubeContext";
import VideoCard from "../components/VideoCard";
import Loading from "../components/Loading";

const Feed = () => {
  const { searchResults } = useContext(YoutubeContext);
  // console.log(searchResults)
  return (
    <>
      <div className="flex gap-3">
        <SideNav />
        <div className="videos lg:grid lg:gap-4 lg:grid-cols-3 lg:grid-rows-3 md:grid md:gap-3 md:grid-cols-2 md:grid-rows-2 p-1" >
          {!searchResults ? (<Loading/>) : (
            searchResults.map((video) =>  (video.type == 'video' && <VideoCard key={video.videId} videoInfo ={video} />))
          )}
        </div>
      </div>
    </>
  );
};

export default Feed;
