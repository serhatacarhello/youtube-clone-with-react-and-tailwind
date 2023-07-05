import {  useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import youtubeIcon from "../assets/youtube.png";
import { Link} from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate()
  const [query, setQuery] = useState(""); // get input value
  console.log(query)
  const iconSize = 25;

//  const handleClick=()=>{
// // navigate(`/results/${query}`)
// navigate(`/results/?search_query=${query}`) // includes special characters // it doesn't work
//  }



  return (
    <header className="flex justify-between items-center py-4 ">
      <Link to={"/"}>
        <div className="title flex items-center">
          <figure>
            <img className="w-[78px]" src={youtubeIcon} alt="Youtube Icon" />
          </figure>
          <h1>Youtube</h1>
        </div>
      </Link>
      <form className="bg-white rounded flex items-center p-2">
        <input
          className="border-none outline-none outline-0 text-black ps-3 rounded"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button className="outline-none border-0  bg-white" onClick={handleClick}>
          <CiSearch className="text-black bg-white " />
        </button> */}
        <Link to={`/results/?search_query=${query}`} className="outline-none border-0  bg-white">
          <CiSearch className="text-black bg-white " />
        </Link>
      </form>
      <FaBell className="w-24" style={{ fontSize: `${iconSize}px` }} />
    </header>
  );
};

export default Header;
