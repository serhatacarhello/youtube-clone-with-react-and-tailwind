import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { options } from "../utils/constants.jsx";


//context yapısının temelini oluşturma
export const YoutubeContext = createContext();

// costext te tutulan verileri bütün uygulamaya sağlama

export const ContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("Eğitici");
// fetchCategory inin return ettiği verileri state e aktarma
const [searchResults, setSearchResults] = useState(null)

  // selectedCategory değerinin değişimini izleme

  useEffect(() => {
    setSearchResults(null) // for loading screen
    fetchCategory(selectedCategory);
  }, [selectedCategory]);

  // Youtube dan veri cekme fonksiyonu
  const fetchCategory = (category) => {
    axios
      .get(`https://youtube138.p.rapidapi.com/search/?q=${category}`, options)
      .then((res) => setSearchResults(res.data.contents));
  };

  return (
    <YoutubeContext.Provider value={{ selectedCategory, setSelectedCategory, searchResults }}>
      {children}
    </YoutubeContext.Provider>
  );
};
