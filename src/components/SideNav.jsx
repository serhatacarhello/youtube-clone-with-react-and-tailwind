import { useContext } from "react";
import { categories } from "../utils/constants";
import { YoutubeContext } from "../context/youtubeContext";

const SideNav = () => {
  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext);

  return (
    <nav className="flex flex-col  pt-4">
      {categories.map((item, i) => (
        <>
          <div  key={i} onClick={()=> setSelectedCategory(item.name)}
            className={`${selectedCategory === item.name && 'bg-blue-700'} flex items-center gap-1  p-2 py-4 cursor-pointer hover:bg-gray-700`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
          {/* objenin divider degeri varsa ekrana bir çizgi bas */}
          {item.divider && <hr />}
        </>
      ))}
    </nav>
  );
};

export default SideNav;
