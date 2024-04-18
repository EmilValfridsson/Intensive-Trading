import { PropsWithChildren, createContext, useContext, useState } from "react";

interface ISearchContext {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  handleEnterPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchContext = createContext({} as ISearchContext);

export default function SearchProvider({ children }: PropsWithChildren) {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const value = event.currentTarget.value;
      setSearchValue(value);
    }
  };
  const value: ISearchContext = {
    searchValue,
    handleEnterPress,
    setSearchValue,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
export function useSearchContext() {
  return useContext(SearchContext);
}
