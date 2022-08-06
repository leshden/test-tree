import {useState, useEffect} from 'react';
import searchImage from '../../assets/search-icon.png';
import hideImage from '../../assets/hide-icon.png';
import {useFilterContext} from '../../contexts/filter-context/FilterContext';
import './Filter.scss';

const Filter = ({keys}: any) => {

  const [showHideBtn, setShowHideBtn] = useState(false);
  const [showSearchBtn, setShowSearchBtn] = useState(false);
  const [showSelector, setShowSelector] = useState(false)

  useEffect(()=> {
    setGroupSelect(keys.map((item: any) => {
      return {title: item, checked: false}
    }));
  }, [])

  const {setGroup, setGroupSelect, groupSelect} = useFilterContext();

  const handleClickHide = () => {
    setShowHideBtn(!showHideBtn);
    setShowSearchBtn(false);
    setShowSelector(false);
  }

  const handleClickSearch = () => {
    setShowSearchBtn(!showSearchBtn);
    setShowHideBtn(false);
    setShowSelector(false);
  }

  const handleChangeInput = (event: any) => {
    setGroup(event.target.value);
  }

  const handleChnageSelect = () => {
    setShowSelector(!showSelector);
  }


  const handleOnCheckboxChange = (event:any) =>{
    const checked = event.target.checked;
    const title = event.target.value;

    setGroupSelect(groupSelect.map((item: any) => {
      return  (title === item.title) ? {...item, checked: checked} : item;
    }));
  }

  return (
    <section className='filter-container'>
      <div className={showHideBtn ? 'filter-btn-container-open filter-style' : 'filter-btn-container-close filter-style' }>
        <div className='filter-select-container'>
          <select className='filter-select'>
            <option>Select groups</option>
          </select>
          <div className='filter-select-tap' onClick={handleChnageSelect}></div>
        </div>
        <div className={showSelector ? 'filter-checkboxes-open' : 'filter-checkboxes-close'}>
          {
            keys.map((item: any, index: number) => {
              return(
                <label className='filter-checkbox-label' key={index}>
                  <input type='checkbox' value={item} defaultChecked={false} onChange={handleOnCheckboxChange}/>
                    {item}
                </label>
              )
            })
          }
        </div>
        <img src={hideImage} className='filter-img-hide' onClick={handleClickHide}></img>
      </div>
      <div className={showSearchBtn ? 'filter-btn-container-open filter-style' : 'filter-btn-container-close filter-style' }>
        <input className='filter-input' onChange={handleChangeInput}></input>
        <img src={searchImage} className='filter-img-search' onClick={handleClickSearch}></img>
      </div>
    </section>
  )
}

export default Filter;
