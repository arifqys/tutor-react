import './ShowCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ShowCard({data}) {
  return (
    <Link to={`/shows/${data.id}`}>
      <div className="card">
        <img src={data.image.medium} alt={data.name} />

        <div>{data.name}</div>
      </div>
    </Link>
  )
}

ShowCard.propTyes = {
  data: PropTypes.object
}

export default ShowCard;