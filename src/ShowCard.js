import './ShowCard.css';
import PropTypes from 'prop-types';

function ShowCard({data}) {
  return (
    <div className="card">
      <img src={data.image.medium} alt={data.name} />

      <div>{data.name}</div>
    </div>
  )
}

ShowCard.propTyes = {
  data: PropTypes.object
}

export default ShowCard;