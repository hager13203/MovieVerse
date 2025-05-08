import { Children, createContext, useState } from "react";

export const SearchContext = createContext();
const SearchContextProvider = ({ children }) => {
  let [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
        {children}
      </SearchContext.Provider>
    </>
  );
};

export default SearchContextProvider;
