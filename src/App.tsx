import React from 'react';
import {randomData} from './components/utils/Utils';
import Tree from './components/tree/Tree';
import Filter from './components/filter/Filter';
import './App.scss';

function App() {
  const treeData = randomData();

  console.log(treeData);

  return (
    <div className="App">
      <Tree treeData={treeData} />
      <Filter />
    </div>
  );
}

export default App;
