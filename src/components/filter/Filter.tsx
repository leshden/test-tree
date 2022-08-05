import {useState} from 'react';
import './Filter.scss';

const Filter = () => {

  const [showHideBtn, setShowHideBtn] = useState(false);
  const [showSearchBtn, setShowSearchBtn] = useState(false);

  const handleClickHide = () => {

  }

  const handleClickSearch = () => {

  }

  return (
    <section className='filter-container'>
      <div className='filter-btn-container filter-style'>
        <input className='filter-input'></input>
        <div className = 'filter-img'></div>
      </div>
      <div className='filter-search filter-style' onClick={handleClickSearch}></div>
    </section>
  )
}

export default Filter;
