import Tree from '../tree/Tree';
import {useFilterContext} from '../../contexts/filter-context/FilterContext';

const TreeRoot = ({treeData}:any) => {

  const {group, groupSelect} = useFilterContext();

  const tmpSelect = treeData.map((o: any) => Object.assign({}, o)).filter(function f(element: any) {

    for (let i = 0; i < groupSelect.length; ++i) {
      if (groupSelect[i].title === element.title) {
        if (groupSelect[i].checked === true) return false
      }
    }

    if (element.items) {
      let le = (element.items = element.items.map((o: any) => Object.assign({}, o)).filter(f)).length;
      return le;
    }

    return true;
  })


  const tmp = tmpSelect.map((o: any) => Object.assign({}, o)).filter(function f(element: any) {
    if (group === '') return true
    if (element.title.includes(group)) return true;
    if (element.items) {
      return (element.items = element.items.map((o: any) => Object.assign({}, o)).filter(f)).length;
    }
  })

  return tmp.length ? <Tree treeData={tmp} /> : <></>;
}

export default TreeRoot;
