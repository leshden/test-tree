import {formatDate} from '../utils/Utils';
import './CardHead.scss';

const CardHead = ({onClick, value}: any) => {
  const {title, subTitle, dateStart, dateEnd} = value;

  const start = formatDate(dateStart);
  const end = formatDate(dateEnd);

  return (
      <section className='card-head' onClick={onClick}>
        <div className='card-title-container'>
          <p className='card-title'>{title}</p>
          <p className='card-subtitle'>{subTitle}</p>
        </div>
        <div className='card-date-container'>
          <p className='card-date'>{start} - {end}</p>
        </div>
      </section>
  )
}

export default CardHead;
