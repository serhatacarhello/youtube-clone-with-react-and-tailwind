import millify from "millify";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const VideoCard = ({ videoInfo }) => {

  const { video } = videoInfo;

  return (
    // Kullnıcı karta tıklarsa kullnıcıyı detay sayfasına yönlendir. parametre olarak videoId sini alır
    <Link to={`/watch/${video.videoId}`}>
    <div>
      <img className="md:w-full  rounded-md my-4" src={video.thumbnails[0].url} />
      <div className="flex gap-3">
        <img className="rounded-full h-[50px]" src={video.author.avatar[0].url} alt="avatar" />
        <div>
          <p title={video.descriptionSnippet}>{video.title}</p>
          <p className="flex items-center">
            <span>{video.author.title} </span>
            {video.author?.badges[0]?.text === "Doğrulandı" && (
              <span>
                {" "}
                <BsFillPatchCheckFill className="mx-2 text-blue-600" />
              </span>
            )}
          </p>
          <div className="flex gap-3">
            <p title={video.stats.views}>{millify(Number(video.stats.viewers || video.stats.views))}</p>
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default VideoCard;
