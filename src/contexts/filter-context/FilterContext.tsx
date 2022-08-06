import {createContext, useState, useContext} from 'react';

const FilterContext = createContext({} as { group: string; setGroup: React.Dispatch<React.SetStateAction<string>>;
                                            groupSelect: {title: string; checked: boolean}[]; setGroupSelect: React.Dispatch<React.SetStateAction<{title: string; checked: boolean}[]>>;});

export const FilterContextProvider = ({children}: any) => {
  const [group, setGroup] = useState('');
  const [groupSelect, setGroupSelect] = useState([{title: '', checked: false}]);
  const value = {group, setGroup, groupSelect, setGroupSelect}

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("useFilterContext was used outside of its Provider");
  }

  return context;
}
