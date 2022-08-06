import TreeNode from '../tree-node/TreeNode';
import Card from '../card/Card';
import type {TableRowType, CardInfoType} from '../../types/Types';
import './Tree.scss';

const Tree = ({treeData} : any) => {

  const isCardArray = treeData.length ? (treeData[0]["subTitle"] !== undefined) : false;

  if(isCardArray) {
    return ( <li id='li-crad-list'> {
    treeData.map((node: CardInfoType) => {
      const {subTitle, dateStart} = node;
      return <Card key={subTitle} node={node} />
    }) }</li>)
  } else {
    return (
      <ul className='ul-tree'>
        {treeData.map((node: any) => {
          const {title} = node;
          return <TreeNode node={node} key={title} />
        })}
      </ul>
    );
  }


}

export default Tree;
