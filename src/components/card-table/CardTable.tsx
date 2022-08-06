import {useState} from 'react';
import type {TableRowType, OnlyKeysTableRowType} from '../../types/Types';
import './CardTable.scss';

type Prop = {
  showTable: boolean;
  tableData: any;
}

const rows = Array(13).fill(0);

function sortBy(field: OnlyKeysTableRowType) {
  return function(a: TableRowType, b: TableRowType) {
    if (a[field] > b[field]) {
      return -1;
    } else if (a[field] < b[field]) {
      return 1;
    }
    return 0;
  };
}

const CardTable = ({showTable, tableData} : Prop) => {

  const [array, setArray] = useState(tableData.map((item: any, index: number) => {
    return {...item, id: index};
  }));

  const handleClickId = () => {
    setArray(() => [...array.sort(function (a: any, b: any) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    })]);
  }

  const handleClickNumber = () => {
    setArray(() => [...array.sort(sortBy('number'))]);
  }

  const handleClickTitle = () => {
    setArray(() => [...array.sort(sortBy('title'))]);
  }

  return (
    <div className={showTable ? 'card-table-open card-table-div' : 'card-table-close card-table-div'}>
      <table className={showTable ? 'card-table-container-open' : 'card-table-container-close'}>
        <thead className='card-thead'>
          <tr className='card-tr-thead'>
            <th className='card-thead-th-id' onClick={handleClickId}>#&#9660;</th>
            <th className='card-thead-th-title' onClick={handleClickTitle}>Title</th>
            <th className='card-thead-th-number' onClick={handleClickNumber}>Number&#9660;</th>
          </tr>
        </thead>
        <tbody className ='card-tbody'>
          {rows.map((item, index) => {

            let idStr = '';
            let titleStr = '';
            let numberStr = '';
            let idKey = index


            if(index < array.length) {
                const {title, number, id} = array[index];
                idKey = id;
                idStr = String(id);
                titleStr = title;
                numberStr = String(number);
            }

            return(
              <tr key={idKey} className='card-tr-tbody'>
                <th className='card-tbody-th-id'>{idStr}</th>
                <th className='card-tbody-th-title'>{titleStr}</th>
                <th className='card-tbody-th-number'>{numberStr}</th>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}

export default CardTable;
