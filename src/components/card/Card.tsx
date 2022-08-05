import {useState} from 'react';
import CardTable from '../card-table/CardTable';
import CardHead from '../card-head/CardHead';
import type {TableRowType, CardInfoType} from '../../types/Types';
import './Card.scss';

const Card = ({node}: any) => {
  const [showTable, setShowTable] = useState(false);
  const {title, subTitle, dateStart, dateEnd, data} = node;
  const value = {title, subTitle, dateStart, dateEnd};


  const handleClickOnHeadCard = () => {
    setShowTable(!showTable);
  }

  return (
    <section className='card-container'>
      <CardHead onClick={handleClickOnHeadCard} value={value} />
      <CardTable showTable={showTable} tableData={data}/>
    </section>
  )
}

export default Card;
