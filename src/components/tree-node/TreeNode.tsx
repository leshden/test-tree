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
  <li>
    <section onClick={handleClick}>
      <div>{title}</div>
    </section>

    {showChildren && <ul className='ul-box-container'>
      <Tree treeData={items} />
    </ul>}

  </li>
  );
}

export default TreeNode;
