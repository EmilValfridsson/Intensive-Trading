import {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

interface ISearchContext {
  searchValue: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchContext = createContext({} as ISearchContext);

export default function SearchProvider({ children }: PropsWithChildren) {
  const [searchValue, setSearchValue] = useState<string>("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const value: ISearchContext = {
    searchValue,
    handleInputChange,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
export function useSearchContext() {
  return useContext(SearchContext);
}
