import Tree from '../tree/Tree';
import {useState} from 'react';
import './TreeNode.scss';

const TreeNode = ({node}: any) => {
  const { title, items } = node;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  return (
  <li className ='li-tree'>
    <section onClick={handleClick} className='section-tree'>
      <div className='div-tree'>{title}</div>
    </section>

    {showChildren && <ul className='ul-tree'>
      <Tree treeData={items} />
    </ul>}

  </li>
  );
}

export default TreeNode;
