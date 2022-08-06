import React from 'react';
import {randomData} from './components/utils/Utils';
import TreeRoot from './components/tree-root/TreeRoot';
import Filter from './components/filter/Filter';
import {FilterContextProvider} from './contexts/filter-context/FilterContext';
import './App.scss';

const rec = (arr: any) : any => {
  let title = '';

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i].items) {
      title += ' ' + arr[i].title + ' ' + rec(arr[i].items);
    } else {
        title += ' ' + arr[i].title;
    }
  }

  return title;
}

function App() {
  const treeData = randomData();

  let arr2:any = rec(treeData);
  const arr3 = arr2.split(' ').map((item: any) => item.trim()).filter((item: any) => {
    return item !== '';
  });

  return (
    <div className="App">
      <FilterContextProvider>
        <TreeRoot treeData={treeData} />
        <Filter keys={arr3} />
      </FilterContextProvider>
    </div>
  );
}

export default App;
