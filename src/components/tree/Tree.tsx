import TreeNode from '../tree-node/TreeNode';
import TreeNodeCardList from '../tree-node-card-list/TreeNodeCardList';
import Card from '../card/Card';
import './Tree.scss';

const Tree = ({treeData} : any) => {

  const isCardArray = (treeData[0]["subTitle"] !== undefined);

  if(isCardArray) {
    return ( <li id='li-crad-list'> {
    treeData.map((node: any) => {
      const {subTitle} = node;
      return <Card key={subTitle} />
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
