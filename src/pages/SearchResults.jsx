import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom"; // instead of useParams use useSearchParams
import { options } from "../utils/constants";
import SideNav from "../components/SideNav";
import VideoCard from "../components/VideoCard";
import Loading from "../components/Loading";

const SearchResults = () => {
  //   const params = useParams();
  // url den arama terimini alma
  // const [searchParams, setSearchParams] = useSearchParams(); // I did not use setSearchParams
  const [searchParams] = useSearchParams();
  // get metoduyla arama terimini alma
  const query = searchParams.get(`search_query`);

  const [videoResults, setVideoResults] = useState(null);
  //   console.log(params);
  useEffect(() => {
    setVideoResults(null);
    axios
      .get(`https://youtube138.p.rapidapi.com/search/?q=${query}`, options)
      .then((res) => setVideoResults(res.data.contents));
  }, [query]);
  console.log(videoResults);
  return (
    <>
      <div className="search-result-page flex w-full">
        <SideNav />
        <div className="videos flex flex-wrap  justify-center p-2 w-full">
          {!videoResults && ( <Loading /> )}
          <div className="flex flex-col max-w-[500px]">
            {videoResults !== null &&
              videoResults.map(
                (content) =>
                  content.type == "video" && (
                    <VideoCard
                      key={content.video.videoId}
                      className={"rounded"}
                      videoInfo={content}
                    />
                  )
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
