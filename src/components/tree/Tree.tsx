import TreeNode from '../tree-node/TreeNode';
import TreeNodeCardList from '../tree-node-card-list/TreeNodeCardList';

const Tree = ({treeData} : any) => {

  const isCardArray = (treeData[0]["subTitle"] !== undefined);

  if(isCardArray) {
    return ( <li> {
    treeData.map((node: any) => {
      const {subTitle} = node;
      return <TreeNodeCardList key={subTitle} />
    }) }</li>)
  } else {
    return (
      <ul>
        {treeData.map((node: any) => {
          const {title} = node;
          return <TreeNode node={node} key={title} />
        })}
      </ul>
    );
  }


}

export default Tree;
